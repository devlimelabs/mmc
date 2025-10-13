# ContentFlow Knowledge Pack

ContentFlow powers marketing pipelines that transform project keywords into platform-ready content. Use this folder to brief agents on the current architecture and workflows.

- `blueprint.md` — product overview, Angular/Firebase architecture, and development standards.
- `requirements.md` — Firestore data model, end-to-end application flow, and platform-specific publishing constraints.
- `deep-think-workflows.md` — n8n automation plan covering topic discovery, content generation, asset creation, and publishing orchestration.
- Diagram: see `assets/contentflow/contentflow-featurediagram.png` for a high-level systems view.

When documenting new flows (e.g., Instagram image creation), add Markdown specs here and store accompanying n8n JSON exports alongside the write-ups. Reference these files from prompts (e.g., `knowledge/marketing/contentflow/deep-think-workflows.md`) so agents can ingest the right level of detail during marketing sessions.
