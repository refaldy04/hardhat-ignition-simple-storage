const SimpleStorage = require('../ignition/modules/SimpleStorage');

async function main() {
  console.log('Deploying contract...');
  const { simpleStorage } = await hre.ignition.deploy(SimpleStorage);
  console.log(`SimpleStorage deployed to: ${await simpleStorage.getAddress()}`);

  const currentValue = await simpleStorage.retrieve();
  const currentValueToString = currentValue.toString();

  console.log(`Current value is: ${currentValueToString}`);

  console.log('Updating value...');
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait();

  const updatedValue = await simpleStorage.retrieve();
  const updatedValueToString = updatedValue.toString();

  console.log(`Updated value is: ${updatedValueToString}`);
}

main().catch(console.error);
