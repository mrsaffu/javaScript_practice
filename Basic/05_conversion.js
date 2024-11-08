/* 
   Type conversion/casting
    it is used to convert one data type to another data type.
    there are two types of type conversion.
    1. Implicit  
       It is used to internally convert one data type to another data type.

    2. Explicit
       it is used to externally convert one data type to another data type .
*/

//   ex - 1. Implicit 

console.log(2+2);               // 4 
console.log(2-2);               // 0
console.log(typeof 2);          // number
console.log(typeof 2+2);        // number2
console.log(typeof null);       // Object 
console.log(typeof Number);     // Function 
console.log(typeof String);     // Function
console.log(typeof Number);     // Function
console.log(typeof BigInt);     // Function
console.log(typeof Symbol);     // Function
console.log(typeof Boolean);    // Function
console.log(typeof undefined);  // Undefined
console.log(typeof boolean);    // Undefined
console.log(typeof Saffu);      // Undefined


let num = Number(1000000000000000000045656545646811156846)
console.log(num);   // 1e+39

let num1 = (1000000000000000000045656545646811156846n)
console.log(num1);  //1000000000000000000045656545646811156846n
console.log(typeof  num1);      // bigint
console.log(typeof Number());   // number
console.log(Number());          // 0
console.log(typeof String());   // string
console.log(String());          // String
console.log(typeof Boolean());  // boolean
console.log(Boolean());         // false


//   ex - 1. Implicit 
var number1 = Number (prompt("Enter your First number "));
var number2 = Number (prompt("Enter your second number "));
var add = number1+number2;
// console.log(prompt ("Addational of number1 & number2 is :", number1 +number2 ));
console.log(number1,"+",number2,"=", add);

var number2 = String(867564);
console.log(number2);
console.log(typeof number2);


