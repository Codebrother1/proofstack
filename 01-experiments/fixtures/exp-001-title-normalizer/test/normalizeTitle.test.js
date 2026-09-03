import test from "node:test";
import assert from "node:assert/strict";
import { normalizeTitle } from "../src/normalizeTitle.js";

test("trims leading and trailing whitespace", () => {
  assert.equal(normalizeTitle("  Ship the demo  "), "Ship the demo");
});

test("collapses internal whitespace to a single space", () => {
  assert.equal(normalizeTitle("  Ship   the   demo  "), "Ship the demo");
  assert.equal(normalizeTitle("Ship\t\tthe\n demo"), "Ship the demo");
});

test("preserves casing", () => {
  assert.equal(normalizeTitle("ProofStack MVP"), "ProofStack MVP");
});

test("throws TypeError for a non-string", () => {
  assert.throws(() => normalizeTitle(null), TypeError);
  assert.throws(() => normalizeTitle(undefined), TypeError);
  assert.throws(() => normalizeTitle(42), TypeError);
  assert.throws(() => normalizeTitle({ title: "Ship the demo" }), TypeError);
});

test("throws TypeError for a blank or whitespace-only string", () => {
  assert.throws(() => normalizeTitle(""), TypeError);
  assert.throws(() => normalizeTitle("   "), TypeError);
  assert.throws(() => normalizeTitle("\t\n"), TypeError);
});
