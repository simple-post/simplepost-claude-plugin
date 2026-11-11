import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = relative => readFile(path.join(root, relative), "utf8");
const json = async relative => JSON.parse(await read(relative));

test("directory manifest and MCP use the existing OAuth-only identity", async () => {
  const manifest = await json(".claude-plugin/plugin.json");
  assert.equal(manifest.name, "simplepost");
  assert.equal(manifest.version, "0.3.1");
  assert.equal(new URL(manifest.privacyPolicyUrl).protocol, "https:");
  assert.equal(manifest.userConfig, undefined);
  const { mcpServers } = await json(".mcp.json");
  assert.deepEqual(mcpServers, { simplepost: { type: "http", url: "https://app.simplepost.social/mcp" } });
});

test("flagship includes only packaged hosted-MCP references", async () => {
  const base = "skills/simplepost";
  assert.deepEqual((await readdir(path.join(root, base, "references"))).sort(), ["mcp.md"]);
  for (const relative of ["SKILL.md", "references/mcp.md"]) {
    const content = await read(`${base}/${relative}`);
    assert(!/```(?:bash|sh|shell)|\$(?:\{)?[A-Z][A-Z_]*(?:TOKEN|SECRET|PASSWORD|API_KEY)/.test(content));
    for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
      if (/^https:\/\//.test(match[1]) || match[1].startsWith("#")) continue;
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(relative), match[1]));
      assert(!target.startsWith("../"), "Reference escapes skill");
      await read(`${base}/${target}`);
    }
  }
});

test("existing Claude-specific workflow skills remain available", async () => {
  for (const name of ["setup", "platform-craft", "repurpose", "post-review", "week-plan", "schedule-tidy"]) {
    assert((await read(`skills/${name}/SKILL.md`)).startsWith("---\n"));
  }
});
