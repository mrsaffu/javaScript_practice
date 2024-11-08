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

// Logical operators : -are used to determine the logic between variables or values.
console.log(" **************  Logical Operator **************");
 let a = 10
 let b = 20;
console.log(a==10 && a<b); //true
console.log(a==b || a<b);  // true
console.log(a==b || a>b);  // False
console.log("\n");


// Conditional statement :- It is  used to perform different actions based on different conditions.
console.log("****************** conditional Statement *******************");

let age = 18;
if(age==18){
    console.log("You are adult yah... u can drive");
}else{
    console.log("! ohh you are not adult you cant drive ");
}

if (age =>18 ) {
    console.log("You can drive ");
} else{
    console.log("You can not drive ");
}