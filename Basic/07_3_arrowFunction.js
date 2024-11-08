// Arrow function :- It allows to write a shorter function syntax.

(() => {
    console.log("Hello Mr Saffu how r u ");
  })
  
  ();

  let demo =()=>{
    console.log("hii i am good ");

  }
  demo();

//   Arrow with no arguments.

let demo1=()=>{
    console.log("how are you ");
}
demo1()

// Arrow with one arguments. (parenthesis not required )
// let demo2=(a)=>{
//     // return a;
//     console.log(a);
// }

let demo2 = a=>{
    console.log(a);
}
// console.log(demo2(10));
demo2(20)

// Arrow function with multiple arguments(parenthesis is required)
let demo3 =(b,c)=>{
    // console.log(b,c);
    var b=b;
    var c;
    //  return c,b;
    console.log(b);
    console.log(c);
}
demo3(11,23)

// 
let demo4=()=>{
    console.log("hiii");
    console.log("hello");
}
demo4()

// arrow function with one console statement (curly braces not required)

let demo5=() => console.log("hello kaise hoo ")
demo5()

// without using return keyword we can return the value
let demo6 = ()=> 29
console.log(demo6());

// without using curly braces we can not use return keyword inside the arrow function .
 let demo7 = ()=>{
    let name = "saffu"
    return name;
 }
 console.log(demo7());


//  example with  math operation 
 
 function mathOperation (a,b,callback){
    // console.log(a);
    // console.log(b);
    callback(a,b);
}
mathOperation(10,20, (x,y)=>{
 
    console.log(`${x}+${y} = ${x+y}`);
})

// subtraction

mathOperation(20,10, (num1, num2)=>{
    console.log(`${num1} - ${num2} = ${num1-num2}`);

})

// Function hosting :- It only possible in named function.
 demo8()
 function demo8(){
    console.log("Hi mr demo ");
 }
demo8()

// we can not host arrow function 

// demo9()

let demo9=(()=>{
    console.log("hello mr demo9");
})
demo9()