# SimplePost Claude Plugin

SimplePost helps Claude draft platform-native social copy, review the exact post, and publish or schedule it across connected accounts. The plugin combines the SimplePost remote MCP connector with planning, repurposing, queue-maintenance, and approval-gated publishing workflows for Claude Code and Cowork.

## Prerequisites

You need a [SimplePost](https://simplepost.social) account. Connect the social accounts you intend to use in the [SimplePost web app](https://app.simplepost.social) before running publishing workflows.

## Install

### Claude Code

After the plugin is published in Anthropic's directory:

```text
/plugin install simplepost@claude-plugins-official
```

For source testing, clone this repository and start Claude Code with:

```bash
claude --plugin-dir ./simplepost-claude-plugin
```

### Cowork

Open **Customize → Plugins**, find **SimplePost** in the plugin marketplace, and select **Install**. Before directory publication, use the Plugins page's upload option with a ZIP containing this repository's plugin files.

## First run

Run `/simplepost:setup`. If prompted, run `/mcp`, select `simplepost`, and complete OAuth sign-in. The connector uses OAuth 2.0 and does not require a pasted API token.

## Skills and commands

- `/simplepost:setup` — verify OAuth and connected social accounts.
- `/simplepost:platform-craft` — apply platform-native copy judgment for X, Threads, Instagram, Facebook, Telegram, YouTube, and Bluesky.
- `/simplepost:repurpose <idea>` — turn one idea into variants for connected platforms without publishing.
- `/simplepost:post-review` — preview the exact payload and require explicit approval before a write.
- `/simplepost:week-plan <brief>` — build a conflict-aware weekly content plan and route the batch through review.
- `/simplepost:schedule-tidy` — audit scheduled content for cadence, gaps, repeated angles, and stale references.

The plugin also includes the read-only drafting sub-agent `simplepost:platform-copywriter`.

## Connector and authentication

The remote MCP endpoint is [`https://app.simplepost.social/mcp`](https://app.simplepost.social/mcp). Authentication is OAuth 2.0 with dynamic client registration.

## Limits

The plugin cannot connect, disconnect, or reauthorize social accounts; use the SimplePost web app for account management. It also cannot edit or delete an already-published post; use the destination platform itself. It does not provide social-network engagement analytics.

## Privacy and support

Read the [SimplePost privacy policy](https://app.simplepost.social/privacy). For support, email [support@simplepost.social](mailto:support@simplepost.social).

## License

MIT — see [LICENSE](LICENSE).
