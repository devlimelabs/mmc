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
- `memories/` — agent-managed temporal notes. Humans generally should not edit these files; link back to `knowledge/` for evergreen references.

## Knowledge Module Guidelines
- Mirror design documentation as `knowledge/design/<topic>` and pair it with usage READMEs (see `styles/` and `ui-tailwind/`).
- Architecture notes live in `knowledge/engineering/<discipline>/<framework>` with diagrams kept in text formats (e.g., Mermaid).
- When importing marketing research (e.g., ContentFlow), capture raw findings under `knowledge/marketing/` and summarize action items at the folder root; attach workflow diagrams via `assets/`.
- Add `index.json` or `catalog.md` files when collections grow, so MCP builders can enumerate contents programmatically.

## Prompt Library Roadmap
1. Create `prompts/README.md` describing taxonomy (build, launch, lifecycle, support).
2. Migrate high-signal prompts from `the-master-plan/prompts/` and `ai-blogs/ai-kb-docs`.
3. Store prompts as Markdown with front matter (`title`, `persona`, `use_case`, `tags`) to support future search tooling.
4. Include runbooks that stitch prompts into flows (e.g., app ideation → UX brief → marketing launch).
5. Document Content Flow marketing pipelines (project → topics → platform-specific outputs) alongside any n8n workflow JSON exports.

## MCP Integration Sketch
- Define a `mcp/context-packs/` directory where each pack lists the knowledge slices to mount.
- Prioritize compatibility with Codex CLI and Claude Code CLI; treat additional agents as downstream consumers of the same packs.
- Build a script (e.g., `scripts/mcp/build-context-pack.ts`) that assembles packs into JSON for Claude Desktop, Voyage, or other runtimes.
- Keep pack sizes <100kb per chunk by referencing assets via links rather than inlining large binaries.

## Next Actions
1. Draft onboarding README describing how agents should load MMC before sessions.
2. Import marketing research (Content Flow, campaign blueprints) into `knowledge/marketing/`.
3. Normalize Tailwind/Prime/Blocks data (dedupe component names, add metadata).
4. Evaluate Git LFS for large image archives; confirm `assets/` policy after cleaning temporary traces.
5. Document environment setup for Playwright-tailwind scraper (package.json, install steps, env vars).
6. Establish automation that lets agents append to `memories/` while keeping humans out of the write loop.

## Open Questions
1. Define the retention and rotation strategy agents should follow inside `memories/`.
2. Determine when to capture marketing performance metrics alongside prompt flows.
3. Do we want automated nightly pulls of Tailwind and Prime/G blocks, or will manual refreshes suffice?
4. Document additional MCP targets after Codex CLI and Claude Code CLI templates ship.
