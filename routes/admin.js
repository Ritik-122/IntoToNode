const express=require("express");
const router=express.Router();
const path=require('path')
const rootDir=require('../utils/path')
router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res)=>{
    res.send('hi')
})
module.exports=router;