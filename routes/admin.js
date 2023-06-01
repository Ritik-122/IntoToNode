const express=require("express");
const router=express.Router();
const addProduct=require('../controllers/product')
router.get('/add-product',addProduct)

router.post('/add-product',(req,res)=>{
    res.send('hi')
})
module.exports=router;