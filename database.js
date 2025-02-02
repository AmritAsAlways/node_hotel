//mongodb server or the database server hammer banane ka koi jarurat nahi hota hai kyuki 
//mongodb hamme bana banaya server already provide kardeta hai 

const mongoose=require('mongoose');
require('dotenv').config();

//Define the mongodb connection url 
//this is mongodb compass url
//const mongourl=process.env.DB_URL_local;   //you can replace mydatabase with your 
//database name

//this is mongodb atlas url 
const mongourl = process.env.DB_URL;

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('db is connected');
})
db.on('error',()=>{
    console.log('db is error');
})
db.on('disconnected',()=>{
    console.log('db is disconnected');
})

module.exports=db;
