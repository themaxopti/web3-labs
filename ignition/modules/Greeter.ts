import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GreeterModule", (m) => {
  const greeter = m.contract("Greeter", ["Alice"]);

  m.call(greeter, "greet");

  return { greeter };
});
