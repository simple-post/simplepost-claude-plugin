---
name: repurpose
argument-hint: "[idea]"
description: Creates platform-specific variants from one idea. Use for repurpose, cross-post, adapt this, or reuse this idea.
---

Treat `$ARGUMENTS` as the source idea and any voice or campaign constraints.

1. Call `list_accounts` first. Never invent an account ID. If no accounts are connected, stop and route the user to `/simplepost:setup`.
2. Generate variants only for platforms represented by connected accounts. If the same platform has multiple accounts, ask which account or voice applies unless `$ARGUMENTS` makes it unambiguous.
3. Invoke the `simplepost:platform-copywriter` sub-agent once per selected platform, in parallel. Give each invocation the source idea, platform, account display name and ID, voice brief, and hard constraints. Tell it to apply the `platform-craft` principles.
4. Present the variants side by side, labelled with platform, account display name, and account ID. Preserve links, factual claims, and requested calls to action.
5. Ask which variants to keep, edit, or drop. Do not call `upload_media`, `preview_post`, `validate_post`, or `create_post` yet.
6. When the user has selected final variants, hand the exact content and real account IDs to `post-review`.
