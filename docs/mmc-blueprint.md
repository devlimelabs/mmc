# MMC Blueprint

This living document tracks the evolving structure of the My Master Context (MMC) repository. It establishes shared language for new contributors (human or agent) and provides a snapshot of current priorities.

## Goals
- Centralize durable knowledge for product, design, engineering, and marketing workstreams.
- Provide ready-to-run assets (prompts, code snippets, reference images) that lower agent spin-up time.
- Stay provider-agnostic so Claude, Gemini, OpenAI, and custom agents can all tap the same context.

## Directory Pillars
- `knowledge/` — canonical references. Initial focus: design style guides, UI component libraries, architecture notes.
- `docs/` — process documentation and standards, including this blueprint and forthcoming contribution guidelines.
- `prompts/` — reusable agent prompts, grouped by domain (dev, marketing, research). Placeholder until migration.
- `scripts/` — automation utilities (e.g., Tailwind UI scraper, context builders); scripts should document dependencies.
- `assets/` — heavy binary artifacts (images, archives) referenced from knowledge articles.

## Near-Term Tasks
1. Normalize naming for migrated content (design styles, Tailwind blocks, Angular architecture notes).
2. Capture marketing-oriented knowledge (Content Flow strategy, campaign templates) in `knowledge/marketing/`.
3. Define MCP config spec and generate starter templates under `mcp/`.
4. Evaluate version control strategy for large media (consider Git LFS or external storage pointers).
5. Draft onboarding README explaining how agents should mount MMC as shared context.
