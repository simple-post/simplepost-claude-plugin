# SimplePost Claude Plugin

SimplePost helps Claude publish, schedule, draft, preview, inspect, and manage social posts across connected accounts. The plugin combines the SimplePost remote MCP connector with the flagship SimplePost skill from [`simple-post/core`](https://github.com/simple-post/core), plus focused copywriting and planning workflows for Claude Code and Cowork.

## Prerequisites

You need a [SimplePost](https://simplepost.social) account. Connect the social accounts you intend to use in the [SimplePost web app](https://app.simplepost.social) before running publishing workflows.

## Install

### Claude Code

Add this repository as a marketplace, then install:

```text
/plugin marketplace add simple-post/simplepost-claude-plugin
/plugin install simplepost@simplepost
```

For local development, clone this repository and start Claude Code with:

```bash
claude --plugin-dir ./simplepost-claude-plugin
```

### Cowork

Open **Customize → Plugins**, find **SimplePost** in the plugin marketplace, and select **Install**. Before directory publication, use the Plugins page's upload option with a ZIP containing this repository's plugin files.

## First run

Run `/simplepost:setup`. If prompted, run `/mcp`, select `simplepost`, and complete OAuth sign-in. The connector uses OAuth 2.0 and does not require a pasted API token.

## Skills and commands

The flagship `/simplepost:simplepost` skill handles publishing, scheduling, drafts, previews, inspection, and queue management through the hosted OAuth MCP connector. Its workflow is generated from the latest canonical skill in [`simple-post/core`](https://github.com/simple-post/core/tree/main/integrations/claude), using `scripts/sync-claude-skill.mjs` there.

This Claude directory package does not run a local CLI, SDK, HTTP server, hook, or shell command, and does not read existing credentials from the user's machine. Developer integrations remain documented separately at [docs.simplepost.social](https://docs.simplepost.social).

Source snapshot: [`simple-post/core@30df5c750d14120462018ce11db8b0b666a3dd6a`](https://github.com/simple-post/core/tree/30df5c750d14120462018ce11db8b0b666a3dd6a/integrations/claude). The generated flagship skill is copied byte-for-byte; update it in core and regenerate rather than editing the copy here.

The existing Claude-specific workflow skills remain available:

- `/simplepost:setup` — verify OAuth and connected social accounts.
- `/simplepost:platform-craft` — apply platform-native copy judgment for X, Threads, Instagram, Facebook, Telegram, YouTube, and Bluesky.
- `/simplepost:repurpose [idea]` — turn one idea into variants for connected platforms without publishing.
- `/simplepost:post-review` — preview the exact payload and require explicit approval before a write.
- `/simplepost:week-plan [brief]` — build a conflict-aware weekly content plan and route the batch through review.
- `/simplepost:schedule-tidy` — audit scheduled content for cadence, gaps, repeated angles, and stale references.

The plugin also includes `simplepost:platform-copywriter`, a drafting sub-agent with no publishing tools, used by `repurpose` and `week-plan` to draft platform variants in parallel.

The flagship skill preserves exact supplied copy unless adaptation is requested, resolves real account IDs before acting, uses idempotency keys for writes, and reports partial per-account or per-thread failures instead of treating a successful request as a universally successful post.

## Connector and authentication

The remote MCP endpoint is [`https://app.simplepost.social/mcp`](https://app.simplepost.social/mcp). Authentication is OAuth 2.0 with dynamic client registration.

## Limits

Use the platform-specific connection link returned by SimplePost to add a social destination in the browser. Disconnection and reauthorization remain in the SimplePost web app. The plugin cannot edit or delete an already-published post; use the destination platform itself. It does not provide social-network engagement analytics.

## Publishing permissions and media privacy

Before a write, establish the exact user-authorized action, accounts, content, media, timing, and audience. A draft or preview request does not authorize publishing. When intent or required details are unclear, show the proposed action and ask. Publishing sends the selected content and media to SimplePost and the destination social platforms.

Uploaded or imported media is internet-accessible to anyone with its URL, even when attached to a draft. Warn the user and obtain approval before exposing private, sensitive, or embargoed assets. Media previews and validation can import media; use text-only inputs for a non-writing smoke test. TikTok defaults to public when privacy is omitted: surface the selected audience and ask when public visibility has not been authorized.

## Privacy and support

Read the [SimplePost privacy policy](https://app.simplepost.social/privacy). For support, email [support@simplepost.social](mailto:support@simplepost.social).

## License

MIT — see [LICENSE](LICENSE).
