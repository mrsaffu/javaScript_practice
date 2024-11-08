// Array : it is huge block of memory which can store both homogenous and heterogenous type of data.
// create an array 
// 1 Array literals 

let array = [10,20,30,40]
console.log(array);
console.log(array.length);
console.log(array.indexOf(10));
console.log(array[0],array[1],array[2]);
console.log(array.at(-1));

// array constructor
console.log("******** array constructor *********");
 let array1 = new Array(10,20,30,40)
 console.log(array1);
 console.log(array1[0],array1[2],array1[1]);
 console.log(array1.length);
console.log("*******************");
 let array2 = new Array(11)
 console.log(array2);
 console.log(array2.at(0));

//  array.of();
let array3=Array.of(10,20,30,40)
console.log(array3);
console.log(array3[2],array3[1]);

// method of array.
// 1.Array helper method.                       // 2.heigher oder function.
//push() method : add the end of Array.

console.log("******** Push *********");
let array4 = [10,20,30,]
console.log(array4);
console.log(array4.push(23)); //its return the new length.
console.log(array4);

// unShift() :- it is use to add the element of the beaning of element 
console.log("******** unShift *********");
console.log(array4);
console.log(array4.unshift(11));  // its return the new length.
console.log(array4);

// pop() : it is use to remove the element of the end of the array and return it.
console.log("******** PoP *********");
console.log(array4);
console.log(array4.pop()); // its return the new element
console.log(array4);

// shift() :- it is used to remove the element of the start of the array and return it.
console.log("******** Shift() *********");
console.log(array4);
console.log(array4.shift()); //it return the new element.
console.log(array4);

// join() it convert into a string.
console.log("******** join() *********");

let demo =[10,15,20, 'aa', 'bb', null,undefined,4.5]
console.log(demo);
console.log(demo.join());

// slice() method. it is used to strcat the part of array and return the select element form an array. it doesn't effect the original array.
console.log("******** slice() *********");

let array5 =[11,12,13,14,'saffu']
console.log("Original",array5);
let myn1= array5.slice(1,3)
console.log('check',myn1);
console.log("After",array5);


console.log("******** splice() *********");
console.log("Original",array5);
let myn2= array5.splice(0,2)
console.log("check",myn2);
console.log("After",array5);

// reverse() : it reverse the element of array.
console.log("****** reverse() ************");
let demo1 =[10,15,30,40,50]
console.log(demo1);
console.log(demo1.reverse());
console.log(demo1);

// flate : it concatenates sub array element. (converted into single array.)
console.log("****** flat() ************");
let arry=[10,24,[222,22,'ddf',[3,6,3],[4,2],55,0], 20,[10,10]]
console.log(arry);
console.log(arry[0]);
console.log(arry[1]);
console.log(arry[2][2]);
console.log(arry[2][3][1]);
console.log(arry[2][3][1]);   //6
console.log(arry[2][4][0]);   //4
console.log(arry[2][5]);      //55
console.log(arry[3]);
console.log(arry[4][1]);      //
console.log(arry.flat(Infinity));
console.log(arry);   // it will not effect the original array.

// find() :- it is used to find the element based on the condition. if the condition is satisfied it wil return that value , if the condition is not satisfied then it will return undefined.
console.log("********** find() *************")
let mnj =[10,20,30,40]
console.log(mnj);
let uyt = mnj.findIndex((a)=> {
    console.log(a);
    return a>10;
})
console.log(uyt);
console.log(mnj);
// console.log(object);

//  findIndex()