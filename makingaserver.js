const express = require('express')

//this app is a convention in development in 
// app we have made a blueprint of the express
const app = express()

require('dotenv').config();
const port = process.env.PORT || 3000;


const db=require('./database.js');

const bodyParser=require('body-parser');
app.use(bodyParser.json())



//this method is used to get information from the server 
// and to get the information we use '/'
app.get('/', function (req, res) {
  res.send('welocome to my hostel .. ')
})
//jab bhi hamlog server file me change karte hai too hamme server ko restart karna hota 
//hai so server ko bar bar start karne ke liye we use the nodemon here 

//get method sirf response lake de sakta hai aur kuch nahi kar sakta hai 


app.get('/panner',function(req,res){
    res.send('sure sir i would love to serve panner ');
})

app.get('/idlli',function(req,res){
    var customizied_idlli={
        name:'rava idlli ',
        size:'10 cm diameter ',
        is_sambhar:true,
        is_cutney:false
    }
    // res.send('sure sir i would love to serve idlli ');
    res.send(customizied_idlli);
})

const Personroutes=require('./Routes/personroutes.js');
app.use('/person',Personroutes);

const Menuroutes = require('./Routes/menuroutes.js');
app.use('/chola_bhatura',Menuroutes);


//app.listen(3000)
//ye code bata raha hai ki server port 3000 pe jinda hai abhi 
//here 3000 is the port or the house of the server 



app.listen(port,()=>{
    console.log("server is listening on the port 3000");
});
//now to jinda kaise karte hai isko run kardoo 

//server ko marte kaise hai isko band kardoo aur isko bande karne ke liye use Ctrl+C
//command here 
