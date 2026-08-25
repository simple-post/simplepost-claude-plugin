# Changelog

All notable changes to this plugin are documented here.

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
