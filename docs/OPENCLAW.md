# OpenClaw and ClawHub

SimplePost is published to ClawHub as a compatible bundle plugin. The package contains the existing Claude and Agent Plugin markers, skills, and remote SimplePost MCP configuration.

The current ClawHub package publisher requires `openclaw.plugin.json` for bundle releases, so the repository includes a minimal no-config manifest for registry validation and catalog identity. It is still intentionally not a native OpenClaw code plugin: `package.json` does not declare `openclaw.extensions` and the package contains no executable extension entrypoint. Always publish it with `--family bundle-plugin`.

## Local verification

```bash
openclaw plugins install .
openclaw plugins inspect simplepost
```

Confirm the installed ClawHub release resolves as a bundle package with its skills and the SimplePost MCP server. Complete OAuth when the server first connects, then test account listing, preview, drafting, scheduling, publishing, and inspection. If a direct local-path install selects the native marker instead, test through the ClawHub dry-run or staged bundle artifact and report the mismatch to OpenClaw before publishing.

## Validate the ClawHub package

Use the latest ClawHub CLI:

```bash
clawhub package validate .
clawhub package publish . --family bundle-plugin --dry-run
```

The catalog icon is `assets/icon.png`, a 512 × 512 PNG under the 512 KiB limit. The unscoped package name is `simplepost`. Before the first real publish, check that the package name is available. If publishing under an organization scope, claim or create the ClawHub publisher first and change the package name to the matching scope, for example `@simple-post/simplepost` only after the `simple-post` owner exists.

## Publish

```bash
clawhub login
clawhub package publish . --family bundle-plugin --dry-run
clawhub package publish . --family bundle-plugin --wait
```

New releases remain out of public install surfaces until ClawHub's automated security checks and verification complete. Inspect the published package and its file list before announcing it.
