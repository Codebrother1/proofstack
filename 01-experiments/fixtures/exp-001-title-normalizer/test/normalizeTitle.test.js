import test from "node:test";
import assert from "node:assert/strict";
import { normalizeTitle } from "../src/normalizeTitle.js";

test("trims leading and trailing whitespace", () => {
  assert.equal(normalizeTitle("  Ship the demo  "), "Ship the demo");
});

test("preserves casing", () => {
  assert.equal(normalizeTitle("ProofStack MVP"), "ProofStack MVP");
});

