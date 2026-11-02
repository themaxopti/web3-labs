import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("Greeter", async function () {
  const { viem } = await network.create();

  it("returns the greeting for the provided name", async function () {
    const greeter = await viem.deployContract("Greeter", ["Alice"]);

    assert.equal(await greeter.read.greet(), "Hello, Alice!");
  });
});