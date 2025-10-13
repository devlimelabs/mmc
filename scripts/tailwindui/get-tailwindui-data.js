const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const outputDir = path.resolve(
  __dirname,
  '../../knowledge/design/ui-tailwind/tailwind-blocks'
);
const imagesDir = path.join(outputDir, 'images');
const codesDir = path.join(outputDir, 'code');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);
if (!fs.existsSync(codesDir)) fs.mkdirSync(codesDir);

// Login configuration - prefer environment variables to avoid committing secrets
const EMAIL = process.env.TAILWIND_EMAIL || '';
const PASSWORD = process.env.TAILWIND_PASSWORD || '';
const USE_INTERACTIVE_LOGIN = !EMAIL || !PASSWORD;

// Main scraping function
async function scrapeUIBlocks() {
  // Launch browser in headful mode to allow for manual login if needed
  const browser = await chromium.launch({
    headless: false,
    slowMo: 50, // Add slight delay between actions
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
  });

  const page = await context.newPage();
  console.log('Navigating to Tailwind Plus login page...');
  await page.goto('https://tailwindcss.com/plus/login', {
    waitUntil: 'networkidle',
  });

  console.log('Attempting automated login...');
  try {
    // Wait for login form elements to be ready
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.fill('input[type="email"]', EMAIL);
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button[type="submit"]');

    // Wait a moment for login submission to process before navigating away
    console.log('Login submitted, waiting briefly...');
    await page.waitForTimeout(2000); // Short delay after clicking login

    console.log(
      'Navigating to Tailwind UI Blocks preview page after login attempt...'
    );
    await page.goto('https://tailwindcss.com/plus/ui-blocks/preview', {
      waitUntil: 'networkidle', // Wait for network to be idle on the preview page
      timeout: 60000,
    });

    // Add a small fixed delay just in case networkidle isn't enough
    console.log('Adding short delay after navigation...');
    await page.waitForTimeout(1000);

    // --- DEBUG: Screenshot before waiting for components ---
    console.log('Taking screenshot before waiting for component selector...');
    try {
      const debugScreenshotPath = path.join(outputDir, 'debug-before-wait.png');
      await page.screenshot({ path: debugScreenshotPath, fullPage: true });
      console.log(`Debug screenshot saved to ${debugScreenshotPath}`);
    } catch (screenshotError) {
      console.error(
        'Failed to take pre-wait debug screenshot:',
        screenshotError
      );
    }

    // Now, specifically wait for the component content to appear on the preview page
    console.log(
      'Waiting for main page heading (h1: Get a better idea...) to appear...'
    );
    await page.waitForSelector('h1:has-text("Get a better idea")', {
      timeout: 120000, // Increased timeout significantly (2 minutes)
    }); // Wait for the main page heading

    console.log('Successfully found main page heading.');
  } catch (loginError) {
    console.error(
      'Error during automated login or navigation to preview page:',
      loginError
    );
    console.log(
      'Attempting to capture screenshot of the page state after error...'
    );
    await page.screenshot({
      path: path.join(outputDir, 'debug-login-error.png'),
      fullPage: true,
    });
    console.log(
      `Debug screenshot saved to ${path.join(
        outputDir,
        'debug-login-error.png'
      )}`
    );
    await browser.close();
    throw new Error('Login failed, cannot continue scraping.'); // Stop script if login fails
  }

  // --- DEBUGGING ---
  console.log('--- Post-Login Debug Info ---');
  console.log('Current Page URL:', page.url());
  console.log('Current Page Title:', await page.title());
  console.log('--- End Debug Info ---');

  // Wait for the page to be fully loaded after potential login/navigation
  console.log('Ensuring preview page content is fully loaded...');
  await page.waitForLoadState('networkidle', { timeout: 60000 }); // Increase timeout slightly
  console.log('Preview page loaded. Starting to scrape components...');

  // --- DEBUG: Log page content before trying to find components ---
  try {
    console.log('--- Page HTML Content Start ---');
    console.log(await page.content());
    console.log('--- Page HTML Content End ---');
  } catch (contentError) {
    console.error('Failed to get page content:', contentError);
  }

  // Collection to store all data
  const uiBlocks = [];

  // Get all component sections
  // Look for the <section> elements that directly follow the breadcrumbs <nav>
  console.log('Finding all component sections using nav + section selector...');
  const componentSectionHandles = await page.$$(
    'nav[aria-label="Breadcrumbs"] + section'
  );
  console.log(
    `Found ${componentSectionHandles.length} component sections to process`
  );

  for (let i = 0; i < componentSectionHandles.length; i++) {
    let sectionHandle = null; // Define handles outside try block for disposal
    let navHandle = null;
    try {
      // Get the section element handle for this component
      sectionHandle = componentSectionHandles[i];

      // Find the preceding nav (breadcrumbs) for this section
      navHandle = await sectionHandle.evaluateHandle(
        (el) => el.previousElementSibling
      );
      if (
        !navHandle ||
        (await navHandle.evaluate((el) => el.tagName.toLowerCase())) !== 'nav'
      ) {
        console.log(
          `  Could not find preceding nav for section index ${i}, skipping.`
        );
        if (navHandle) await navHandle.dispose();
        await sectionHandle.dispose();
        continue;
      }

      // Find the heading element *within* the section
      const headingElement = await sectionHandle.$('h2');
      if (!headingElement) {
        console.log(`  Could not find h2 within section index ${i}, skipping.`);
        await navHandle.dispose();
        await sectionHandle.dispose();
        continue;
      }

      // Get component name
      const componentName = await headingElement.textContent();
      console.log(
        `Processing component ${i + 1}/${
          componentSectionHandles.length
        }: ${componentName}`
      );

      // Extract category info from breadcrumbs
      const categoryInfo = await navHandle.evaluate((nav) => {
        if (!nav)
          return {
            category: 'Unknown',
            subcategory: 'Unknown',
            detailCategory: 'Unknown',
          };

        const links = Array.from(nav.querySelectorAll('a'));
        return {
          category: links.length > 0 ? links[0].textContent.trim() : 'Unknown',
          subcategory:
            links.length > 1 ? links[1].textContent.trim() : 'Unknown',
          detailCategory:
            links.length > 2 ? links[2].textContent.trim() : 'Unknown',
        };
      });

      // Find the tablist *within* the current section
      console.log(`  Checking section for ${componentName}...`);
      const tablist = await sectionHandle.$('div[role="tablist"]');

      if (!tablist) {
        console.log(
          `  Could not find tablist within the section for ${componentName}, skipping component.`
        );
        await navHandle.dispose();
        await sectionHandle.dispose();
        continue;
      }
      console.log(`    Found tablist.`);

      // Get the tabs from the tablist
      const previewTab = await tablist.$('button:nth-child(1)');
      const codeTab = await tablist.$('button:nth-child(2)');

      if (!previewTab || !codeTab) {
        console.log(
          '  Could not find Preview or Code tab, skipping component.'
        );
        await navHandle.dispose();
        await sectionHandle.dispose();
        continue;
      }

      // Take screenshot of preview
      console.log('  Taking screenshot of preview...');
      await previewTab.click();
      await page.waitForLoadState('networkidle', { timeout: 5000 });

      // Find the preview panel (should be the first tabpanel *within* the section)
      console.log(`    Looking for preview panel (1st tabpanel)...`);
      const previewTabPanel = await sectionHandle.$(
        'div[role="tabpanel"]:nth-of-type(1)'
      );

      if (!previewTabPanel) {
        console.log(
          '  Could not find tab panel for preview, skipping screenshot.'
        );
        await navHandle.dispose();
        await sectionHandle.dispose();
        continue; // Skip to next component if panel not found
      }
      console.log(`    Found preview panel.`);

      console.log(`    Looking for iframe within preview panel...`);
      const iframeElementHandle = await previewTabPanel.$('iframe'); // Look for iframe inside the preview panel

      let screenshotPath = null;
      if (iframeElementHandle) {
        const iframe = await iframeElementHandle.contentFrame();
        if (iframe) {
          // Wait for the iframe content to load
          await iframe.waitForLoadState('networkidle', { timeout: 15000 }); // Wait for iframe content

          // Create a clean filename for the screenshot
          const componentSlug = componentName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-');
          const categorySlug = categoryInfo.category
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-');
          const filename = `${categorySlug}-${componentSlug}.png`;
          screenshotPath = path.join(imagesDir, filename);

          // Take the screenshot
          try {
            await iframe
              .locator('body')
              .screenshot({ path: screenshotPath, timeout: 10000 }); // Target body within iframe
            console.log(`  Screenshot saved to ${screenshotPath}`);
          } catch (screenshotError) {
            console.error(
              `  Error taking screenshot for ${componentName}:`,
              screenshotError.message
            );
            console.log(`  Attempting screenshot of iframe element instead...`);
            try {
              await iframeElementHandle.screenshot({
                path: screenshotPath,
                timeout: 10000,
              });
              console.log(
                `  Iframe element screenshot saved to ${screenshotPath}`
              );
            } catch (elementScreenshotError) {
              console.error(
                `  Failed to take element screenshot for ${componentName}:`,
                elementScreenshotError.message
              );
              screenshotPath = null; // Ensure path is null if both failed
            }
          }
        } else {
          console.log(
            '  Could not get content frame from iframe element, skipping screenshot'
          );
        }
      } else {
        console.log(
          '  No iframe found for this component, skipping screenshot'
        );
      }

      // Now get the code
      console.log('  Getting code for all frameworks...');
      await codeTab.click();
      await page.waitForLoadState('networkidle', { timeout: 5000 });

      // Find the code panel (should be the second tabpanel *within* the section)
      console.log(`    Looking for code panel (2nd tabpanel)...`);
      // Note: The second panel might be a span or other element, let's be more general
      const codeTabPanel = await sectionHandle.$(
        '[role="tabpanel"]:nth-of-type(2)'
      );
      let languageSelect = null;
      let codePanel = null; // This will now refer to the code *content* area (e.g., the <pre> tag)

      if (codeTabPanel) {
        console.log(
          `    Found code panel. Looking for select and pre within it...`
        );
        // Look for the select element *within* the code tab panel
        languageSelect = await codeTabPanel.$('select');
        // The 'codePanel' for extraction purposes is the <pre> tag, also *within* the code tab panel
        codePanel = await codeTabPanel.$('pre'); // Specifically target the <pre> for $eval

        if (!languageSelect)
          console.log(`      Did not find select within code panel.`);
        if (!codePanel)
          console.log(`      Did not find pre tag within code panel.`);
      } else {
        console.log(`    Did not find code panel (2nd tabpanel).`);
      }

      if (!languageSelect || !codePanel) {
        console.log(
          '  Could not find language selector or code panel pre tag, skipping code extraction.'
        );
        // Still add the component data we have so far, just without code
        const componentData = {
          id: i + 1,
          name: componentName,
          category: categoryInfo.category,
          subcategory: categoryInfo.subcategory,
          detailCategory: categoryInfo.detailCategory,
          image: screenshotPath
            ? path.relative(outputDir, screenshotPath)
            : null,
          code: { html: null, react: null, vue: null },
        };
        uiBlocks.push(componentData);
        console.log(`  Component "${componentName}" processed (code skipped).`);
        await navHandle.dispose();
        await sectionHandle.dispose();
        continue; // Skip to the next component
      }

      // Get all options
      const options = await languageSelect.$$('option');
      let htmlCode = null;
      let reactCode = null;
      let vueCode = null;

      // Helper function to get code for a specific option index
      const getCodeForOption = async (optionIndex, frameworkName) => {
        if (options.length > optionIndex) {
          const option = options[optionIndex];
          const optionValue = await option.evaluate((el) => el.value);
          console.log(`    Selecting ${frameworkName} (${optionValue})...`);
          // Click the option using page.selectOption by value for reliability
          await languageSelect.selectOption({ value: optionValue });
          // await option.click(); // Less reliable than selectOption
          // await sleep(500); // Replaced
          await page.waitForTimeout(500); // Short pause after selection seems necessary sometimes
          await page.waitForLoadState('networkidle', { timeout: 5000 }); // Wait for code to update
          return await codePanel
            .evaluate((pre) => pre.textContent) // Use evaluate on the pre element handle directly
            .catch((err) => {
              console.warn(
                `    Could not extract ${frameworkName} code: ${err.message}`
              );
              return null;
            });
        } else {
          console.warn(
            `    ${frameworkName} option index ${optionIndex} not found.`
          );
          return null;
        }
      };

      // Get code for each framework if available
      htmlCode = await getCodeForOption(0, 'HTML');
      reactCode = await getCodeForOption(1, 'React');
      vueCode = await getCodeForOption(2, 'Vue');

      // Save component data
      const componentData = {
        id: i + 1,
        name: componentName,
        category: categoryInfo.category,
        subcategory: categoryInfo.subcategory,
        detailCategory: categoryInfo.detailCategory,
        image: screenshotPath ? path.relative(outputDir, screenshotPath) : null,
        code: {
          html: htmlCode,
          react: reactCode,
          vue: vueCode,
        },
      };

      // Save individual component code files
      const componentSlug = componentName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-');
      const categorySlug = categoryInfo.category
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-');

      if (htmlCode) {
        const htmlPath = path.join(
          codesDir,
          `${categorySlug}-${componentSlug}-html.html`
        );
        fs.writeFileSync(htmlPath, htmlCode);
      }

      if (reactCode) {
        const reactPath = path.join(
          codesDir,
          `${categorySlug}-${componentSlug}-react.jsx`
        );
        fs.writeFileSync(reactPath, reactCode);
      }

      if (vueCode) {
        const vuePath = path.join(
          codesDir,
          `${categorySlug}-${componentSlug}-vue.vue`
        );
        fs.writeFileSync(vuePath, vueCode);
      }

      uiBlocks.push(componentData);
      console.log(`  Component "${componentName}" processed successfully`);

      // Add a small delay between components to avoid rate limiting - using Playwright's wait
      // await sleep(1000); - Replaced
      await page.waitForTimeout(500); // Shorter wait should suffice
      // Dispose of handles
      if (navHandle) await navHandle.dispose();
      if (sectionHandle) await sectionHandle.dispose();
    } catch (error) {
      console.error(
        `Error processing component index ${i} (${
          componentName || 'Unknown'
        }):`,
        error
      ); // Added component name to error
      // Ensure handles are disposed even on error
      if (navHandle)
        await navHandle
          .dispose()
          .catch((e) => console.error('Error disposing navHandle:', e));
      if (sectionHandle)
        await sectionHandle
          .dispose()
          .catch((e) => console.error('Error disposing sectionHandle:', e));
    }
  }

  // Save the master JSON file
  const jsonPath = path.join(outputDir, 'tailwind-blocks-master.json');
  fs.writeFileSync(jsonPath, JSON.stringify(uiBlocks, null, 2));
  console.log(`\nAll components processed. Master JSON saved to ${jsonPath}`);

  // Close browser
  await browser.close();

  return {
    total: uiBlocks.length,
    jsonPath,
    outputDir,
  };
}

// Run the scraper
scrapeUIBlocks()
  .then((result) => {
    console.log(`\nScraping completed successfully!`);
    console.log(`Total components scraped: ${result.total}`);
    console.log(`Output directory: ${result.outputDir}`);
    console.log(`Master JSON: ${result.jsonPath}`);
  })
  .catch((error) => {
    console.error('An error occurred during scraping:', error);
  });
