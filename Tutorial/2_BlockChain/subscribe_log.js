const Web3 = require('web3');

let ws = 'wss://mainnet.infura.io/ws';

var web3 = new Web3(ws);

// web3.eth.subscribe('logs',{
//     address:'0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'
// },(err,log)=>{
//     if(!err) console.log(log);
// })
web3.eth.subscribe('logs',{
    address:'0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    topics:[0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6]
},(err,log)=>{
    if(!err) console.log(log);
})

// pregnant_event = "Pregnant(address, uint256, uint256, uint256)";
// pregnant_event_hashed = web3.utils.sha3(pregnant_event);
// console.log(pregnant_event_hashed);
//0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6

