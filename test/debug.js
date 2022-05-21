const { setProofApi, POSClient, use, Converter } = require("@maticnetwork/maticjs");
const { Web3ClientPlugin } = require("@maticnetwork/maticjs-web3");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { toBuffer } = require("ethereumjs-util");
const { user1, rpc, pos, user2 } = require("./config");
use(Web3ClientPlugin);
const from = user1.address;
const to = user2.address;



const execute = async () => {
  // return console.log(
  //   Converter.toHex('matic-bor-receipt-'),
  //   Buffer.from('matic-bor-receipt-', 'utf-8'),
  //   toBuffer(Converter.toHex('matic-bor-receipt-'))
  // )

  const privateKey = user1.privateKey;
  const posClient = new POSClient();


  await posClient.init({
    log: true,
    network: 'mainnet',
    version: 'v1',
    parent: {
      provider: new HDWalletProvider(privateKey, rpc.parent),
      defaultConfig: {
        from
      }
    },
    child: {
      provider: new HDWalletProvider(privateKey, rpc.child),
      defaultConfig: {
        from
      }
    }
  });
  console.log("init called");

  const exitCalldata = await posClient.erc20(pos.child.erc20, true).withdrawExit("0x21443a8284e039c2d8d6f32f6ec10f1f6892675586f9d8060cdb11e59b42a2ad", { from, encodeAbi: true });
	console.log("exitCalldata: ", exitCalldata);
}

execute().then(_ => {
  process.exit(0)
}).catch(err => {
  console.error(err);
  process.exit(0);
})
