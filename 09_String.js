/*String : it is a collection of character .

Type of deceleration
1. By using single quote(' ').
2. by using dabble quote(" ").
3. by using back tick (` `).
4. by using string keyword.
5. by using new .
*/

//1
let a = 'Sayyed';
let b = "Safwan";
let c = `Ahmad`; 
let d = String('Shahnawazi');
let e = new String("Saffu");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(e.toString());
//  console.log(e.toString(valueof));
//  console.log(e.valueOf[e]);

// String length : the length property returns the length of string.
console.log("********* length property **********"); 
let demo = "saffu"
console.log(demo);
console.log(demo.length);
console.log(demo[3]);

// Extracting String character.
// 1. at(position) method.
// 2. charAt(position) method. return a character at specific index.
// 3. charCodeAt(position) method. it returns a unique code value of the character at specific location.
console.log("******** Extracting String character *******");
let demo1 = "saffu"
console.log( demo1.at(4));

console.log("******charCodeAt******");
console.log(demo1.charAt(3)); 
console.log("*******charCodeAt ******");
console.log(demo1.charCodeAt(1));
console.log(demo1[2]);

// Extracting String Part : There are three method for extracting a part of string.
                        // the methods takes 2 parameters 1. start(position), 2.end(position)
                            
//  1. Slice(start, end ) 
console.log("*********** slice() method ********");
let demo2 ="Saffu";
let result = demo2.slice(0 , 4);
console.log(result);
console.log(demo2);
console.log(demo2.slice(0,5)); //aff
console.log(demo2.slice(2,5));

// --------------- negative ----------------
console.log("*********** Negative expression ***********");
console.log(demo2.slice(0,-1));
console.log(demo2.slice(0,-4));
console.log(demo2.slice(-5,-1));

/* 2. subString(start, end) :- the difference is that start end value is less than 0 it threated 0.
     - the sub string method extract char form start to end 
     - it dose not change the original string.
     - if the start is grater the end arguments are swiped.
     - start or end vale is less then 0 it threated as a 0.
     */

console.log("************** subString **************");
let demo3 = 'mrSaffu';
console.log(demo3.substring(0 ,7));
console.log(demo3.substring(2,6));

console.log("************ negative ************");
console.log(demo3.substring(-2,2));
console.log(demo3.substring(-1, -5));
console.log(demo3.substring(4,-5));

// 3. SubStar :- it expects the positive length value. resulting in an empty when provided with as negative value.

console.log("*********** subStar **************");
let demo4 = "MrrSaffu";
console.log(demo4.substr(0,3));
console.log(demo4.substr(-2,4));
console.log(demo4.substr(-8,-1));

// toUppercase() method :- its converted string to upper case.
console.log("*********** toaUpper&toLower  **************");


let demo5= "mr alex"
console.log(demo5);
console.log(demo5.toUpperCase());
console.log(demo5.toLowerCase());

// Concat() method : it join two and more string .
console.log("*********** Concat **************");

let aa = "saffu"
let bb = "Ahmad "
console.log(aa);
console.log(bb);
console.log(aa.concat(bb));

// Trim() : it removes whitespace from both side of string.

console.log("*********** trim() **************");

let demo6 = "       saffu      "
console.log(demo6);
console.log(demo6.length);

let result1 = demo6.trim();
console.log(result1);
console.log(result1.length);

// trimStart() : it work like trim but remove white space only form the start of the string.

console.log("*********** trimStart() **************");
let demo7 = "    saffu     ";
console.log(demo7);
console.log(demo7.length);
let trimstart = demo7.trimStart()
console.log(trimstart);
console.log(trimstart.length);

// trimEnd() : it work like trim but remove white space only form the end of the string.

console.log("*********** trimEnd() **************");
let trimend = demo7.trimEnd()
console.log(trimend);
console.log(trimend.length);

// padStar() :- it pad the string form the start.

console.log("*********** padStar() **************");
let demo8 = "saffu"
console.log(demo8);
console.log(demo8.padStart(7,"X"));

console.log("*********** padStar() **************");
console.log(demo8.padEnd(10, "X"));

/*
string repeat() : it return the string with number of copies of string.
  it return a new string.
  it dos not cheng the original string.
*/
console.log("*********** repeat() **************");
let demo9 = "saffu"
console.log(demo9);
let result2 = demo9.repeat(2)
console.log(result2);

// replacing string content  : it replace the specific value with another value of the string.
// replace(search value,  replace value )
console.log("*********** replace() **************");
let demo10 = "My name Safwan and my nick name is saffu "
   
console.log(demo10);
console.log(demo10.replace("saffu","alex"));

// To replace case in-sensitive , use a regular expression with an /i flag(insensitive).
console.log();
console.log("*********** replace(  /i  ) **************");

let text = "i love to eat pomegranate , do u love pomegranate";
console.log(text);
console.log(text.replace(/pomegranate/i, "mango"));
let result3= text.replace(/pomegranate/i, "mango");
console.log(result3);

//  to replace all the matches use a regular expression with a/g flag (global match)

let text1 = " i eats mango and mango eats me or "
console.log(text1.replace(/mango/gi,"apple"));

// indexof() : it returns index(position) of the first occurrence of a string , and it returns -1 if the string is not found.
console.log("*********** indexOf() **************");

let text2= "safwan hello i am safwan "
console.log(text2);
console.log(text2.indexOf('safwan'));
console.log(text2.indexOf("safwan",4));
console.log(text2.indexOf("hello"));
console.log(text2.indexOf("am"));
console.log(text2.indexOf("sawan"));

console.log("*********** lastIndexOf() **************");
console.log(text2.lastIndexOf("safwan"));
console.log(text2.lastIndexOf("i"));
console.log(text2.lastIndexOf("hello"));
console.log(text2.lastIndexOf("am"));
console.log(text2.lastIndexOf("safwansh"));

// Search() : it search a string for a string (or a regular expression ) and return the position of the match.
console.log("*********** search() **************");

let text3= "hii hello hii hellO how  "
console.log(text3.search(/hii/));
console.log(text3.search(/hello/));
console.log(text3.search(/Hii/));
console.log(text3.search(/hElLo/i));

// match(): it return an array containing the result of matching a string against the string or regular expression.
console.log("*********** match() **************");

let text4 = "saffu is a innocent boy and Saffu is humble"
console.log(text4);
console.log(text4.match(/saffu/gi));
console.log(text4.match("boy"));

