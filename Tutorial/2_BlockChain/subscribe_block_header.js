const Web3 = require('web3');

let ws = 'wss://mainnet.infura.io/ws';

var web3 = new Web3(ws);

web3.eth.subscribe('newBlockHeaders',(err,blockheader)=>{
    if(err) console.log(err);
    else console.log(blockheader);
});