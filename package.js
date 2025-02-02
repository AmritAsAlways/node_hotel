//npm is a mall jaha se hamlog bahut saree package's install karte hai 
//jaise ki hamlog ne nodejs install kiya that too uske sath hamme kuch api or package 
//iske sath hi mil gaya tha 
//jaise ki filesystem or os walla package soo

//too use any package we will have to install that package first into that file so install 
//these two package's 

var fs=require('fs'); //it means that hamme abhi fs library ki requirement hai 
var os=require('os');

//to know more about them use nodejs documentation 

var user=os.userInfo(); //userInfo is a function which is defined inside the os library and we can use it
console.log(user);
console.log(user.username);

//appendFile is also a function here defined in the fs library 
//and if we hover over it then we can see the various parameter's it take's 
fs.appendFile('greeting.txt','Hi '+user.username+'!\n',()=>{
    console.log('file is created');
});

//fs and os package are asked very much in the interview process of the browser stack 
//there are various package's on npm which can do the work of fs and os when installed but
//they want you to use the core packages of nodejs 


// console.log(fs);
// console.log(os);

//there is a very famouos library which we can use that is loadash library so to 
//download this library we go to npm and download ye library ya package development ko 
//kafi aasan bana deta hai 

//loadash ko jab bhi hammlog require karte hai too usko hamlog _ var me save karte hai 
//ye convention hai joo log follow karte hai 

var _=require('lodash');
var data=['person','person',1,2,1,2,'name','age',2]

//in loadash there are various method through which we can deal with the data very effectively 
//in it there are various inbuild function which we can use 
//to know all the function 
//search loadash documentation 
var filter=_.uniq(data);
console.log(filter);

console.log(_.isString('amrit'));
console.log(_.isString(3));
console.log(_.isString(true));