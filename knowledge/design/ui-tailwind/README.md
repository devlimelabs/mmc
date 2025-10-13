# Tailwind UI Reference Blocks

This catalog captures Tailwind UI component slices (images + HTML/React markup) for rapid layout exploration. Use cases:
- Share screenshots from `tailwind-blocks/images/` when aligning on look-and-feel.
- Bootstrap implementations fast by pasting snippets from `tailwind-blocks/code/`.
- Cross-reference component metadata via `tailwind-blocks-master.json`.

Automation support lives in `scripts/tailwindui/get-tailwindui-data.js`. Set `TAILWIND_EMAIL` and `TAILWIND_PASSWORD` environment variables before running the scraper, or let it launch a headful Playwright session for manual login. The script deposits fresh assets inside this directory so the repository always reflects the latest Tailwind Plus inventory.
