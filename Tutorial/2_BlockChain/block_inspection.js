let Web3 = require('web3');
let url_infura = 'https://mainnet.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_infura_ropsten = 'https://ropsten.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_infura);

// web3.eth.getBlockNumber().then((result)=>{
//     console.log(result);
// })

// web3.eth.getBlock(7609928).then((block)=>{
//     console.log(block)
// });

// web3.eth.getBlock('latest').then((block)=>{
//     console.log(block);
// });

// web3.eth.getBlock('pending').then((block)=>{
//     console.log(block);
// });

// web3.eth.getBlock('0x8879ef8688e36647e4fc5a9887d1e22601afde035f36e282604ab77accd124ca').then((block)=>{
//     console.log(block);
// });

web3.eth.getTransactionFromBlock(7609957,2).then(console.log);