const express=require('express');
const app=express();
const path=require('path')
const homeRoute=require('./routes/shop');
const addProductRoute=require('./routes/admin')
const successRoute=require('./routes/success')
// const rootDir=require('../utils/path')
const contactRoute=require('./routes/contactus')
app.use(homeRoute)
app.use(addProductRoute)
app.use(contactRoute)
app.use(successRoute)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));

})
app.listen(4000);