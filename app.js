const express=require('express');
const app=express();
const path=require('path')
const homeRoute=require('./routes/shop');
const addProductRoute=require('./routes/admin')
const successRoute=require('./routes/success')
const error=require('./controllers/error')
const contactRoute=require('./routes/contactus')

app.use(homeRoute)
app.use(addProductRoute)
app.use(contactRoute)
app.use(successRoute)

app.use(error);



app.listen(4000);