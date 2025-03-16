const express = require('express')
const db = require('../db/db'); // Import the database connection

const router = express.Router()

router.get('/',(req,res)=>{
    const query = "SELECT * FROM CART"
    db.query(query,(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error')
        }
        else{
            res.json(results)
        }
    })
})


module.exports = router