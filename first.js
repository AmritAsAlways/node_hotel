// var a=10;
// var b=90;
// var ans=a+b;
// console.log(ans);
// console.log("this is my answer whose value is -> ",ans);


let a=10;
let b=90;
let ans=a+b;
const name='amrit';
console.log(ans);
console.log("this is my answer whose value is -> ",ans);
console.log(typeof ans);

const cars=['sedan','hatchbag','suv',32]
cars.push('tesla');
console.log(cars[0])
console.log(cars);

var hour=16;

if(hour<12){
    console.log("we are not allowed");
}
else{
    console.log("we are allowed here ");
}

var count=10;
for(let i=0;i<=count;i++){
    console.log(i);
}


const person={
    name:'John',
    age:21,
    isStudent:true,
    hobbies:['gaming','timepass']
};
console.log(person.age);
console.log(person.hobbies);

const ages=[12,24,56,87];
const result=ages.filter(checkage);
//filter method takes each element of the ages array 
//and pass it into the argument of checkage function one by one 
function checkage(age){
    return age>=30;//this code means that if the age is less than 30 then return that age 
}
console.log(result);


var prompt = require('prompt-sync')();
const age=prompt('Please enter your age : ');
if(age<=18){
    console.log('you got a 18% child discount ');
}
else{
    console.log('you got a 50% senior discount ');
}
