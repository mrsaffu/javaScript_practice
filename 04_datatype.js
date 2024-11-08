/* 
  DataType.
  It is used to which type of data we are going to use
  there are two types of data type 
  1. primitive data type : it is already define by the programmer .
     eg :- 1. number
           2. string
           3. boolean 
           4. null
           5. symbol
           6.Bigint
           8.Object
           9.Undefined
            
  2. non primitive data type  : it have to design by the user .
    eg :- array[]
          object()
          function()
*/

let a = Number(100);     // default value is 0;
console.log(a);

let b= String("saffu");
console.log(b);

let c = Boolean(true)    // default value is 0;
console.log(c);

// let d = null('100')
let d = Symbol ();
console.log(d);

let num1 = Number(100);
let num2 = Number(200);
let add = num1 + num2;
console.log("num1 + num2 = " , add);     // num1 + num2 =  300
console.log(num1, "+", num2,'=', add);   // 100 '+' 200 '=' 300


// let aa = BigInt();     // Uncaught TypeError: Cannot convert undefined to a BigInt
// console.log(aa);

let ab = BigInt(125645787656545434245678907647645789);
console.log(ab);         // 125645787656545437153383887616868352n

