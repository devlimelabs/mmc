# Prompt Library

This directory houses reusable prompt assets and orchestration guides for agents working on product, marketing, and research tasks.

## Taxonomy
- `build/` — app ideation, architecture planning, implementation helpers.
- `launch/` — marketing narratives, positioning exercises, brand voice guides.
- `lifecycle/` — retention, support, customer success follow-ups.
- `support/` — debugging flows, incident response, customer comms.

Add more folders as needed; keep names lowercase with hyphens (`growth-experiments/`) so MCP configs can glob paths predictably.

## File Format
- Store prompts as Markdown (`.md`) unless the asset is programmatic (e.g., `.json` for API payload templates).
- Include YAML front matter with the following keys:
  ```yaml
  ---
  title: Tailwind UI Audit Assistant
  persona: "Senior Frontend Architect"
  use_case: "Review UI implementation for accessibility and spacing issues"
  tags: ["build", "frontend", "accessibility"]
  related_assets:
    - knowledge/design/ui-tailwind/README.md
    - knowledge/design/styles/neo-brutalism/neo-brutalism.md
  last_updated: 2024-10-12
  ---
  ```
- After the front matter, document context, instructions, and example interactions.

## Workflow Runbooks
- Place multi-step prompt sequences in `flows/`. Each flow should:
  - Describe the objective, prerequisites, and expected outputs.
  - Reference individual prompts with relative paths.
  - Link to relevant knowledge (e.g., `knowledge/marketing/contentflow/deep-think-workflows.md`).
  - Optionally embed n8n workflow exports (`.json`) under the same folder for automation parity.
- Include ASCII diagrams or Mermaid snippets when visualizing decision trees; keep them inline with the Markdown.

## n8n Integration
- Store exports in `flows/<name>/workflows/` with descriptive filenames (`topic-ingestion-n8n.json`).
- Provide a short README inside each flow folder summarizing triggers, key nodes, and required credentials.
- When updating a workflow, bump the `last_updated` field in the paired Markdown and note the change in a changelog section.

## Contribution Checklist
- Validate relative links to `knowledge/` and `assets/` so agents can resolve context quickly.
- Run prompts through at least one agent before committing; capture learnings in a `notes` block if adjustments are needed during execution.
- Add yourself to the `authors` list in front matter when introducing new assets.
- Keep files under ~6KB when possible; for longer scripts, consider breaking them into modular prompts.
