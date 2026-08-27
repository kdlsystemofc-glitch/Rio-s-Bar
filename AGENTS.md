# KDL Factory — Antigravity CLI Workspace Rules

This is a normal local client workspace.

CRITICAL CLI RULE:
- Do NOT use write_to_file, replace_file_content or multi_replace_file_content for project deliverables.
- Create/edit client files through terminal commands (PowerShell/Python/Node) executed with this workspace as CWD.
- Use relative paths such as docs/file.md, css/style.css, js/main.js, reports/file.png and index.html.
- Never create normal client deliverables as Antigravity brain/artifact files.
- Never write project output under .gemini/antigravity-cli/brain or scratch.
- This workspace belongs to one client only; do not read/write any sibling client folder.
