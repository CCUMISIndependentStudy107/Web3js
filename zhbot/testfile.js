let Web3 = require('web3');
let url_infura = 'https://mainnet.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_infura_ropsten = 'https://ropsten.infura.io/';
let url_ganache = 'http://127.0.0.1:7545';

// let web3 = new Web3(url_infura_ropsten);
let address = '0xf4d80E82C4E3f44B71099e9C087a0Cd8Cd746B8f';
let contract_address = '0x654899645B3638E63A37CB21Ff7B312f6ae77DB5';
let web3 = new Web3(new Web3.providers.HttpProvider(url_infura_ropsten));

// var tokenInst = web3.eth.contract(contract_address).at(address);
// var balance2 = tokenInst.balanceOf.call(address).then(bal => {console.log(bal);});

// var balance = web3.eth.getBalance(address).then(bal => {
    // console.log(bal);
// });
// balance = web3.toDecimal(balance);

// console.log(balance);

// let wt = web3.eth.accounts.wallet.add({
//     privatekey: '',
//     address : '0xf4d80E82C4E3f44B71099e9C087a0Cd8Cd746B8f'
// });


let tokenAddress = contract_address;
let walletAddress = address;

// The minimum ABI to get ERC20 Token balance
let minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

// Get ERC20 Token contract instance
let contract = web3.eth.contract(minABI).at(tokenAddress);

// Call balanceOf function
contract.balanceOf(walletAddress, (error, balance) => {
  // Get decimals
  contract.decimals((error, decimals) => {
    // calculate a balance
    balance = balance.div(10**decimals);
    console.log(balance.toString());
  });
});
