# Changelog

All notable changes to this plugin are documented here.

## 0.3.0 - 2026-09-20

- Add the flagship `simplepost` Agent Skill from `simple-post/core` at source commit `2839eca`.
- Document MCP, CLI, HTTP API, TypeScript SDK, and Scheduler interface selection.
- Add current posting safeguards for account resolution, idempotency, scheduling, media, partial failures, billing eligibility, and TikTok publishing options.
- Add a reusable SimplePost logo asset for marketplace listings.
- Refresh the Claude plugin description and discovery keywords.
- Add Agent Plugins v1 manifests for portable installation in Cursor and other conforming clients.
- Make shared workflow skills portable while keeping the optional Claude copywriting sub-agent.
- Add Kiro Power activation keywords, verification steps, and registry submission copy.
- Make the optional copywriting agent portable to Grok Build and document the official pinned-SHA marketplace submission.
- Add ClawHub package metadata, compliant catalog artwork, and OpenClaw bundle validation and publication instructions.

## 0.2.1 - 2026-08-25

- Preload `platform-craft` into `platform-copywriter` so delegated drafts receive the plugin's platform guidance.
- Clarify when to use public media URLs versus chat-provided file references.
- Add a stable `idempotencyKey` to approved `create_post` payloads so ambiguous retries cannot publish duplicates.
- Restore the directory-facing root `SETUP.md` guide while retaining `/simplepost:setup` for Claude Code.

## 0.2.0 - 2026-08-25

- Add `.claude-plugin/marketplace.json` so the repository installs directly with `/plugin marketplace add`.
- Set an explicit `name` on every skill so command names stay stable across plugin updates.
- Add `argument-hint` to `repurpose` and `week-plan`.
- Restrict `platform-copywriter` with a `tools` allowlist; the previous `disallowedTools` denylist did not cover the SimplePost MCP write tools.
- Remove the unused root `SETUP.md`, which Claude Code never loaded.

## 0.1.0 - 2026-08-23

- Add the SimplePost remote MCP connector configuration.
- Add setup, platform copy, repurposing, review, weekly planning, and schedule-tidying skills.
- Add the platform-copywriter sub-agent.
