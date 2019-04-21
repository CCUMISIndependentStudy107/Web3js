let Web3 = require('web3');
let url_infura = 'mainnet.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_infura_ropsten = 'ropsten.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_ganache);
console.log(web3.eth.accounts.create());
