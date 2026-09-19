# SimplePost Agent Plugin

SimplePost helps AI agents publish, schedule, draft, preview, inspect, and manage social posts across connected accounts. The repository is both a portable [Agent Plugin](https://agent-plugins.org/) and a Claude plugin. It combines the SimplePost remote MCP connector with the flagship SimplePost skill from [`simple-post/core`](https://github.com/simple-post/core), plus focused copywriting and planning workflows.

## Prerequisites

You need a [SimplePost](https://simplepost.social) account. Connect the social accounts you intend to use in the [SimplePost web app](https://app.simplepost.social) before running publishing workflows.

## Install

### Cursor

Install this public repository as an Agent Plugin from Cursor's **Customize** view. For local verification and the Marketplace checklist, see [docs/CURSOR.md](docs/CURSOR.md).

### Kiro

Install this public repository as a Kiro Power. It uses the same Agent Plugins v1 manifests as Cursor. See [docs/KIRO.md](docs/KIRO.md) for activation tests and prepared registry submission copy.

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

The flagship `/simplepost:simplepost` skill chooses the right SimplePost interface and handles publishing, scheduling, drafts, previews, inspection, queue management, and integration work. It includes focused references for:

- Remote MCP workflows through accounts connected at `app.simplepost.social`.
- The SimplePost CLI for terminal, scripting, and CI workflows.
- The HTTP API for service-to-service integrations.
- The TypeScript SDK for in-process publishing.
- The Scheduler app for account management and hosted scheduling.

Additional workflow skills remain available in clients that support Agent Skills:

- `/simplepost:setup` — verify OAuth and connected social accounts.
- `/simplepost:platform-craft` — apply platform-native copy judgment for X, Threads, Instagram, Facebook, Telegram, YouTube, and Bluesky.
- `/simplepost:repurpose [idea]` — turn one idea into variants for connected platforms without publishing.
- `/simplepost:post-review` — preview the exact payload and require explicit approval before a write.
- `/simplepost:week-plan [brief]` — build a conflict-aware weekly content plan and route the batch through review.
- `/simplepost:schedule-tidy` — audit scheduled content for cadence, gaps, repeated angles, and stale references.

Claude also loads `simplepost:platform-copywriter`, a drafting sub-agent with no publishing tools. Portable Agent Plugin clients ignore the optional `agents/` directory; the shared skills do not require that agent to work.

The flagship skill preserves exact supplied copy unless adaptation is requested, resolves real account IDs before acting, uses idempotency keys for writes, and reports partial per-account or per-thread failures instead of treating a successful request as a universally successful post.

## Connector and authentication

The remote MCP endpoint is [`https://app.simplepost.social/mcp`](https://app.simplepost.social/mcp). Authentication is OAuth 2.0 with dynamic client registration.

## Limits

The plugin cannot connect, disconnect, or reauthorize social accounts; use the SimplePost web app for account management. It also cannot edit or delete an already-published post; use the destination platform itself. It does not provide social-network engagement analytics.

## Privacy and support

Read the [SimplePost privacy policy](https://app.simplepost.social/privacy). For support, email [support@simplepost.social](mailto:support@simplepost.social).

## License

MIT — see [LICENSE](LICENSE).
