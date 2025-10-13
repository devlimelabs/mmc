# MMC Standards & Operating Plan

This standard defines how the My Master Context repository grows into a shared knowledge hub for all agents and collaborators.

## Purpose
- Provide a canonical, versioned home for design systems, engineering patterns, prompts, and marketing playbooks.
- Keep assets modular so agents can assemble tailored context packs for specific projects.
- Capture decisions and rationale alongside artifacts to avoid re-learning the same lessons.

## Directory Contracts
- `docs/` — governance and onboarding material (`mmc-blueprint.md`, this standard, future playbooks).
- `knowledge/` — subject-matter libraries; every subdomain keeps human-readable summaries plus machine-ingestible assets.
- `assets/` — binaries referenced from knowledge (images, zips); prefer lightweight previews when possible.
- `prompts/` — reusable prompt kits grouped by domain and delivery channel (development, marketing flows, customer research).
- `mcp/` — MCP template configs and generators. Each config should specify directories to mount and context chunking strategy.
- `scripts/` — repeatable automation; scripts must document dependencies and write outputs into `knowledge/` or `assets/`, not into `scripts/`.

## Knowledge Module Guidelines
- Mirror design documentation as `knowledge/design/<topic>` and pair it with usage READMEs (see `styles/` and `ui-tailwind/`).
- Architecture notes live in `knowledge/engineering/<discipline>/<framework>` with diagrams kept in text formats (e.g., Mermaid).
- When importing marketing research (e.g., Content Flow), capture raw findings under `knowledge/marketing/` and summarize action items at the folder root.
- Add `index.json` or `catalog.md` files when collections grow, so MCP builders can enumerate contents programmatically.

## Prompt Library Roadmap
1. Create `prompts/README.md` describing taxonomy (build, launch, lifecycle, support).
2. Migrate high-signal prompts from `the-master-plan/prompts/` and `ai-blogs/ai-kb-docs`.
3. Store prompts as Markdown with front matter (`title`, `persona`, `use_case`, `tags`) to support future search tooling.
4. Include runbooks that stitch prompts into flows (e.g., app ideation → UX brief → marketing launch).

## MCP Integration Sketch
- Define a `mcp/context-packs/` directory where each pack lists the knowledge slices to mount.
- Build a script (e.g., `scripts/mcp/build-context-pack.ts`) that assembles packs into JSON for Claude Desktop, Voyage, or other runtimes.
- Keep pack sizes <100kb per chunk by referencing assets via links rather than inlining large binaries.

## Next Actions
1. Draft onboarding README describing how agents should load MMC before sessions.
2. Import marketing research (Content Flow, campaign blueprints) into `knowledge/marketing/`.
3. Normalize Tailwind/Prime/Blocks data (dedupe component names, add metadata).
4. Evaluate Git LFS for large image archives; decide whether to keep `trace.zip` in git or move to `assets/external/`.
5. Document environment setup for Playwright-tailwind scraper (package.json, install steps, env vars).

## Open Questions
1. What conventions should govern versioned “memories” (temporal notes vs. evergreen docs)?
2. Should marketing flows tie directly into Content Flow tooling, and if so, how are iterations tracked?
3. Do we want automated nightly pulls of Tailwind and Prime/G blocks, or will manual refreshes suffice?
4. Which MCP targets are highest priority (Claude Desktop, Cursor MCP, custom CLI)?
