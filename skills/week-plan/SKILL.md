---
description: Builds a conflict-aware weekly SimplePost calendar. Use for week plan, content calendar, weekly schedule, or posting cadence.
---

Treat `$ARGUMENTS` as the themes, campaign context, cadence, and timing preferences already supplied.

1. Call `get_schedule` for the requested week and the user's IANA timezone. Also call `list_accounts` to resolve real accounts. Never propose an occupied slot without identifying the conflict.
2. Ask together for any missing essentials: themes, target cadence per platform, timezone, campaign dates, and accounts to include. Infer only what is safely supported by `$ARGUMENTS` and the live account list.
3. Propose a table with one row per slot: date and time with timezone, platform, account display name and ID, and content angle. Mark existing schedule conflicts and suggest alternatives.
4. Ask for explicit approval of the plan before creating or editing anything.
5. After approval, draft each post. Use the `platform-copywriter` sub-agent independently per platform where parallel drafting helps keep variants distinct.
6. Route the complete batch through `post-review`. Show exact copy and media per slot and obtain explicit approval before any `create_post` call.
7. After every approved write completes, call `show_schedule` so the user sees the rendered result. Report partial failures without retrying writes unless the user confirms the retry.
