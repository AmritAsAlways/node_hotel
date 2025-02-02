//mongodb server or the database server hammer banane ka koi jarurat nahi hota hai kyuki 
//mongodb hamme bana banaya server already provide kardeta hai 

const mongoose=require('mongoose');

//Define the mongodb connection url 
const mongourl='mongodb://localhost:27017/hotels' //you can replace mydatabase with your 
//database name

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
