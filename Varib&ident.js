/*
 # Variable 
   variable is a container which is used to stor the data.
   there are three types of variable.
   1. var
   2. let
   3. cons 
   eg : var a = 100 ;
   here var is a variable and a is a identifier and = is a operator and 100 is a data 
 */
//  let a = 100;
//  console.log(a)

 /*
 # Identifier
   identifier is a name give to any variable, class, function, object, array etc.

 # Rule of identifier 
   1. identifier name must start with latter, dollar($), underscore(-)
   2. it cant start with number .
   3. Jscript is a case sensitive so Y and y are different identifier.
   4. Key words can not be used in identifier.
   5. we can use dollar and underscore as a identifier.
 */


//  # Deceleration and initialization.

// 1. Var keyword.
//  DEC is supported.
var a;
 console.log(a)

//  INT is supported.
 a=100;
 console.log(a);

//  DEC & INT is supported.
 var b = 200;
 console.log(b);

//  RE-DEC is supported.
 var b;
 console.log(b)

//  RE-INT is supported.
 b=250;
 console.log(b)

//  RE-DEC & RE-INT is supported.
 var b=300;
 console.log(b)

// ***************************************************
// 2. Let
//  DEC is supported.
 let c;
 console.log(c);

//  INT is supported.
 c=100;
 console.log(c)

//  DEC & INT is supported.
 let d ="Saffu";
 console.log(d)

//  RE-DEC is not supported.
//  let d;  Uncaught SyntaxError: Identifier 'd' has already been declared

//  RE-INT is  supported.
 d="Alex"
 console.log(d)

//  RE-DEC & RE-INT is supported.
//  let d="Mr Saffu";  Cannot redeclare block-scoped variable 'd'. Uncaught SyntaxError: Identifier 'd' has already been declared

// ****************************************

// 3.Cons Keyword.
//  DEC is not supported.
//  const e;   'const' declarations must be initialized.  

//  INT is not supported.

//  DEC & INT is supported.
 const e="Ahmad";
 console.log(e)

//  RE-DEC is not supported.
//   const e;  Cannot redeclare block-scoped variable 'e'

//  RE-INT is not supported.
//  e="Sayyed";   console.log(e)  Uncaught TypeError: Assignment to constant variable.

//  RE-DEC & RE-INT is supported.
//  const e = "alll";  Uncaught SyntaxError: Identifier 'e' has already been declared.