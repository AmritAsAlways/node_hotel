//json is a organized form of data generally represented by the string's 
//json is a lightweight and structured and organized data
//eg:
// {
//     "name":'amrit',
//     "age":21,
//     "hobbies":["reading","painting","hiking"]
// }

//the above example is a form of json data in the form of string's 
//as we know that we genearally don't prefer the json form of data we prefer the object form of 
//data so to convert the json form of data to the object form and vice versa we have some 
//inbuilt method's here i.e

const jsonstring='{"name":"John","age":30,"city":"newyork"}';
const jsonobject=JSON.parse(jsonstring);
console.log(jsonobject.name);

const objecttoconvert={name:"Alice",age:25};
const jsonStringified=JSON.stringify(objecttoconvert); //convert the object to the json string
console.log(jsonStringified);

console.log(typeof jsonStringified);  //that's why we can json data as the string form of the data 


//api is a collection of lots of endpoint's of the server 