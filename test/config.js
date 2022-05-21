// const dotenv = require('dotenv');
// const path = require('path');
// const env = dotenv.config({
//     path: path.join(__dirname, '.env')
// });

const rootTokenAddress = "0x853d955aCEf822Db058eb8505911ED77F175b99e"; // FRAX
const rootChainManagerAddress = "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77";
const childTokenAddress = "0x104592a158490a9228070E0A8e5343B499e125D0"; // polyFRAX

module.exports = {
    rpc: {
        parent: process.env.ROOT_RPC,
        child: process.env.MATIC_RPC || 'https://rpc-mumbai.matic.today',
    },
    pos: {
        parent: {
            erc20: rootTokenAddress,
            chainManagerAddress: rootChainManagerAddress,
        },
        child: {
            erc20: childTokenAddress,
        },
    },
    user1: {
        "privateKey": process.env.USER1_PRIVATE_KEY,
        "address": process.env.USER1_FROM
    },
    user2: {
        address: process.env.USER2_FROM, // Your address
        "privateKey": process.env.USER2_PRIVATE_KEY,
    },
}
