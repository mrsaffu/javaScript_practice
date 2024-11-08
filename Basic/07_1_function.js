/* 
   Hosting 
   Before declaration and initialization if we are trying to print the identifier the identifier is declare by using var keyword is called hosting.
   it will get the value the is undefined.

*/
// console.log(a);  // undefined.
// var a = 100;
// console.log(a);

/* 
   TDZ(temporal dead zone )
   Before declaration and initialization if we are trying to print the identifier. the identifier is declared by the using let and const keywords is called TDZ. 

*/
// console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared (
// let b = 200;
// console.log(b);

// console.log(c);
// const c = 300;
// console.log(c);


/*
  Scope .
  scope in java script refers current context of code which determine the accessibility of variable to java script.
  there are four types of Scope 
  1. Global Scope 
  2. Script and function scope.
  3. block scope.
  4. local scope.
*/
//    1. Global Scope :- when we are going to declare the any identifier by using var keyword. the identifier will present inside the global scope.
// 1. Global scope 
var a =100;
console.log(a);

//    2. Script Scope :- when we are going to declare the identifier by using let and const keyword . the identifier will present inside the script scope.

// let b = 200;
// console.log(b);
// let c = 300;
// console.log(c);

// Block Scope ;- the scope restrict the variable that declare inside the specific block. form access by the out side of the block is called block scope. the let and const keyword have faculties the variable to be a blocked scope.

// var   a = 100;
// console.log(a);
// var   b = 200;
// console.log(b);
// const c = 300; 
// console.log(c);

// {
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  var a = "Saffu";
//  let b = 400;
//  const c = 600;
// }

// Local Scope :- The variable declare inside the function it become local to the function. local variable have function scope it mean which means that they can only be accessed form within the function.

var a =100;
let b= 200;
const c= 300;
function demo (){
    console.log(a);
    console.log(b);
    console.log(c);
    var d=400;
    let e=500;
    const f=600;
}
demo();
console.log(demo);

