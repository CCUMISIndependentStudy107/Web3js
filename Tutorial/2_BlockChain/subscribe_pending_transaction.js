const Web3 = require('web3');

let ws = 'wss://mainnet.infura.io/ws';

var web3 = new Web3(ws);

// web3.eth.subscribe('pendingTransactions',(err,txhash)=>{
//     console.log(txhash);
// })

web3.eth.subscribe('pendingTransactions',(err,txhash)=>{
     if(!err)
        web3.eth.getTransaction(txhash,(err,tx)=>{
            if(tx != null)
                if(tx.value >= 1000000000000000000){
                    console.log(txhash);
                    console.log(web3.utils.fromWei(tx.value,'ether')," ether");
                }
        })
    else console.log(err);
});