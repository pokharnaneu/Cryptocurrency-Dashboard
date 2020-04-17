const express = require('express');

const router = express.Router();

const crypto_currencies = require('../models/cryptocurrency');

//defining route
router.get('/',(req,res)=>{    
    crypto_currencies.find({ })
    .then((data)=>{
res.json(data);
    })
    .catch((error)=>{
console.log('error: ',error);
    });
   
});
/* router.get('/api/:acronym',(req,res)=>{    
    crypto_currencies.findOne({acronym})
    .then((data)=>{
console.log('Data: ',data);
res.json(data);
    })
    .catch((error)=>{
console.log('error: ',error);
    }); */
    router.get('/:coin_id',(req,res)=>{       
        console.log("name",req.params);
        crypto_currencies.findOne({acronym:req.params.coin_id})
        .then((data)=>{
            res.json(data);        
    })
    .catch((error)=>{
    console.log('error: ',error);
    });
        
});

module.exports=router;