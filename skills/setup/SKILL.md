---
description: Verifies SimplePost OAuth and connected accounts. Use for setup, first run, sign in, authorization, or no accounts.
disable-model-invocation: true
---

1. Call `list_accounts`.
2. If the SimplePost server is not authorized, stop. Tell the user to run `/mcp`, select `simplepost`, complete OAuth sign-in, and then rerun `/simplepost:setup`.
3. If authorization succeeds but the account list is empty, stop. Direct the user to [the SimplePost web app](https://app.simplepost.social) to connect platform accounts, and state explicitly that no plugin tool can connect, disconnect, or reauthorize a social account.
4. On success, report each connected account by platform and display name. Do not expose credentials or access tokens.
5. Recommend two or three useful starting commands based on the connected platforms: `/simplepost:repurpose`, `/simplepost:week-plan`, and `/simplepost:schedule-tidy`.
