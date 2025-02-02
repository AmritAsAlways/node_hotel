console.log("server file is running ");
//how to create a function in the js

// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

// var add=(a,b)=>{return a+b }; //here add is a function 

var add=(a,b)=> a+b;  //here add is a function 

var result=add(222,5);
console.log(result);

//another way to write a function

//  () this sign always means that it is showing a function 

//now to run this program we have to again save the code written or use autosave and then 
//we have to go to the terminal to run this command to make it easier to run we will use 
//the nodemon package what this package does is that 

//ye hammare file ko automatically run kardega jab bhi ham koi change's karenge apne file me 
//so to start this package write nodemon nameofthefile 
//and all set now it is always run the code 
//nodemon will only run on this file 

//means this abc is a normal variable and this abc() is a function not a function

//ye ek aisa function hai joo likhte ke sath hi run hojata hai --> 
//ye function tab tak run nahi hoga jab tak isske last me ek () na lag jaye 
(function(){
    console.log('prince is added ');
})();


//we are importing notes.js file in the server.js file 

const notes=require('./notes.js');
console.log('server file is available ');
var age=notes.age;
var harami=notes.harami;
console.log(age);
console.log(harami);

var result=notes.addNumber(harami+69,18);
console.log('the result is :',result);
//now if we will run this file then it will also execute the notes.js file's content 