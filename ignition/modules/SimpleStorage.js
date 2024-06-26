const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('SimpleStorage', (m) => {
  const simpleStorage = m.contract('SimpleStorage', []);

  return {
    simpleStorage,
  };
});
