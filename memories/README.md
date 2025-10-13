# Agent Memory Space

Agents own this directory. Use it for temporal notes, session transcripts, and lightweight conclusions that help future runs recall context.

Guidelines:
- Treat entries as append-only logs; prune or archive them programmatically when they expire.
- Reference evergreen knowledge by linking to paths under `knowledge/` rather than duplicating content.
- Prefer structured formats (JSON, YAML) so agents can parse memories easily.
- Humans typically should not edit these files manually—let your agent automations curate and rotate them.
