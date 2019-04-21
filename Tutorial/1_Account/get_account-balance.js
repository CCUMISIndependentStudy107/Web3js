let Web3 = require('web3');
let url_infura = 'https://mainnet.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_infura_ropsten = 'https://ropsten.infura.io/v3/9dd80c35cb94499eabf3f14fe867384d';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_ganache);
let address = '0x635d6486Da92a310C1B9497e37536F64E35400a3';

web3.eth.getBalance(address,function(error,balance){
    if(error){
        console.log(error);
    }
    else{
        console.log(web3.utils.fromWei(balance,'ether'));
    }
});