//callback's is also a type of function but ye function tabhi run hoga 
//jab isse phele koi dusra 

/*
function callback(){
    console.log('prince is calling a callback ');
}
//here main function is add when this will be executed then only callback function is executed
const add=function(a,b,callback){
    var result=a+b;
    console.log('result is ',result);//main function work completed
    callback();
}
add(3,4,callback);
*/

//another shorthand denotion of the callback function is 

const add=function(a,b,prince){
    var result=a+b;
    console.log('result is ',result);//main function work completed
    prince();
}
add(3,5,function(){
    console.log('add completed');
});

//and more shorthand denotion is 
add(3,5,()=>{
    console.log('add completed part 2');
})