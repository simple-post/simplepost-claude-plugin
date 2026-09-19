---
name: repurpose
description: Creates platform-specific variants from one idea. Use for repurpose, cross-post, adapt this, or reuse this idea.
---

Treat the user's supplied content as the source idea together with any voice or campaign constraints.

1. Call `list_accounts` first. Never invent an account ID. If no accounts are connected, stop and route the user to `/simplepost:setup`.
2. Generate variants only for platforms represented by connected accounts. If the same platform has multiple accounts, ask which account or voice applies unless the request makes it unambiguous.
3. Draft one variant per selected platform using the `platform-craft` guidance. A client may delegate variants to isolated agents when supported, but the workflow must also work without sub-agents.
4. Present the variants side by side, labelled with platform, account display name, and account ID. Preserve links, factual claims, and requested calls to action.
5. Ask which variants to keep, edit, or drop. Do not call `upload_media`, `preview_post`, `validate_post`, or `create_post` yet.
6. When the user has selected final variants, hand the exact content and real account IDs to `post-review`. Selection authorizes the content, not publishing, unless the user explicitly asked to publish or schedule the selected variants.
