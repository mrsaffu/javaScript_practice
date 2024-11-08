/*
   IIFE(Immediate invoking function)
    A function which executed immediately is known as IIFE.

    some time pollution occur due to the global scope so we used the IIFE to remove the pollution cause of variable or what ever declare on that global scope 

*/

(function( ){
    var a=10;
    console.log(a);

})();

// iife named 

(function name(){
    console.log("saffu");
}) 
();

// IIFE with parameters

(function (name){
console.log(name);
})
("mr alex");

// arrow IIFE

(()=>{
    console.log("hii mr arrow IIFE");
}) ();

// with Parameter 
((age)=>{
    console.log(age);

})(20)
console.log("****************IIFE close***************");
// 