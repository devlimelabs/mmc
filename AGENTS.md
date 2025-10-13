# Repository Guidelines
This guide explains how to extend the `mmc` repository responsibly. The tree is intentionally lean right now; as you add functionality, follow these conventions so every agent and support module stays discoverable and easy to maintain.

## Project Structure & Module Organization
Keep the root limited to repo-level docs (`README.md`, `AGENTS.md`) and tooling manifests. Place runtime code in `src/mmc/` with one subpackage per agent (`src/mmc/agents/<agent_name>/`). Mirror that hierarchy under `tests/` so every module has co-located coverage. Store reusable assets in `assets/` (prompt templates, sample transcripts, diagrams) and long-form design docs in `docs/`. Example layout:
```
mmc/
├── src/mmc/agents/
├── tests/agents/
├── assets/prompts/
├── docs/architecture/
└── scripts/
```

## Build, Test, and Development Commands
- `python -m venv .venv && source .venv/bin/activate` — create/enter the local Python environment; commit the `.venv/` entry to `.gitignore`.
- `pip install -r requirements-dev.txt` — sync shared tooling (formatter, linter, pytest); pin versions when adding new packages.
- `pytest` — run the complete automated suite; use `pytest -k <pattern>` for focused runs during debugging.
- `ruff check src tests && black src tests` — enforce linting and formatting before opening a pull request.
- `python -m mmc.agents.<agent>.cli` — launch an agent locally; each agent package must expose a `cli.py` entry point.

## Coding Style & Naming Conventions
Follow PEP 8 with 4-space indentation. Modules and packages use lowercase with underscores (`async_router.py`), while classes follow PascalCase. Functions that perform observable actions use imperative verbs (`build_prompt()`). Keep public APIs typed with Python type hints and validate inputs early. Centralize shared constants in `src/mmc/constants.py` instead of duplicating values across agents.

## Testing Guidelines
All automated tests live in `tests/` and mirror the agent directory (`tests/agents/<agent_name>/`). Prefer `pytest` fixtures for environment setup and give tests descriptive names like `test_scheduler_reschedules_on_timeout`. Maintain ≥85% coverage for new files; failing to meet the threshold requires a justification in the pull request description. Snapshot assets belong under `tests/data/`. Run `pytest --maxfail=1 --disable-warnings` before pushing to catch regressions quickly.

## Commit & Pull Request Guidelines
Use Conventional Commit prefixes (`feat:`, `fix:`, `docs:`, `chore:`) with concise, imperative subjects (≤72 chars). Group related changes in a single commit to keep history bisectable. Each pull request should include: a summary of intent, links to related issues, screenshots or logs for UX-facing updates, and notes on testing performed. Request review only after the checklist passes (`ruff`, `black`, `pytest`) and ensure new agents or prompts are referenced in `docs/agents/README.md`.
