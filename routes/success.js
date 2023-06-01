const express=require('express')
const router=express.Router();
const rootDir=require('../utils/path')
const path=require('path')
router.get('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
})
module.exports=router;