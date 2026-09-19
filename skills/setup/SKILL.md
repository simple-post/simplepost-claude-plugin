---
name: setup
description: Verifies SimplePost OAuth and connected accounts. Use for setup, first run, sign in, authorization, or no accounts.
---

1. Call `list_accounts`.
2. If the SimplePost server is not authorized, stop. Tell the user to open the current client's MCP server controls, select `simplepost`, complete OAuth sign-in, and then retry setup. In Claude Code, this is available through `/mcp`.
3. If authorization succeeds but the account list is empty, stop. Direct the user to [the SimplePost web app](https://app.simplepost.social) to connect platform accounts, and state explicitly that no plugin tool can connect, disconnect, or reauthorize a social account.
4. On success, report each connected account by platform and display name. Do not expose credentials or access tokens.
5. Recommend two or three useful starting workflows based on the connected platforms: repurpose an idea, plan a week, or tidy the schedule. In Claude, the corresponding commands are `/simplepost:repurpose`, `/simplepost:week-plan`, and `/simplepost:schedule-tidy`.
