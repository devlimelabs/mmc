# MMC Blueprint

This living document tracks the evolving structure of the My Master Context (MMC) repository. It establishes shared language for new contributors (human or agent) and provides a snapshot of current priorities.

## Goals
- Centralize durable knowledge for product, design, engineering, and marketing workstreams.
- Provide ready-to-run assets (prompts, code snippets, reference images) that lower agent spin-up time.
- Stay provider-agnostic so Claude, Gemini, OpenAI, and custom agents can all tap the same context.

## Directory Pillars
- `knowledge/` — canonical references. Initial focus: design style guides, UI component libraries, architecture notes, marketing flows.
- `docs/` — process documentation and standards, including this blueprint and forthcoming contribution guidelines.
- `prompts/` — reusable agent prompts, grouped by domain (dev, marketing, research). Placeholder until migration.
- `scripts/` — automation utilities (e.g., Tailwind UI scraper, context builders); scripts should document dependencies.
- `assets/` — heavy binary artifacts (images, archives) referenced from knowledge articles.
- `memories/` — agent-controlled temporal notes; humans should not hand-edit this space.

## Current Imports
- Design style library migrated from early AI blog experiments (`knowledge/design/styles/`).
- Tailwind UI snippet catalog with screenshots and code (`knowledge/design/ui-tailwind/` + scraper in `scripts/tailwindui/`).
- Angular state architecture diagrams for frontend patterns (`knowledge/engineering/frontend/angular/`).
- ContentFlow marketing system documentation (architecture, workflows, data model) (`knowledge/marketing/contentflow/`).

## Near-Term Tasks
1. Normalize naming for migrated content (design styles, Tailwind blocks, Angular architecture notes).
2. Capture marketing-oriented knowledge (Content Flow strategy, campaign templates, n8n workflows) in `knowledge/marketing/`.
3. Draft taxonomy for marketing prompt flows and define storage format (Markdown + optional n8n JSON).
4. Define MCP config spec with initial templates for Codex CLI and Claude Code CLI.
5. Evaluate version control strategy for large media (consider Git LFS or external storage pointers).
6. Draft onboarding README explaining how agents should mount MMC as shared context and how they should interact with `memories/`.
