const express=require("express");
const router=express.Router();
const contactUs=require('../controllers/contactUs')

router.get('/contact-us',contactUs)

module.exports=router;