
var a = "a" // redeclare, does hoisting, can be reassigned
let b = "b" /* can't be redclared, no hoisting must be declared before use,can be reassigned  */
const c = "c" // can't be redclared, no hoisting must be declared before use, can't be reassigned

// b = "z"
// c = "z"

/* 
multiline 
comment 
*/

// single line comment

// String Interpolation

// const greeting = `${h} `



// function hello(){
//     console.log(greeting)
// }
 
// const hello = function(name = "Alex"){
//     return (greeting + name + "!")
// }

// const hello = name => greeting + name + "!"
    
// console.log(hello("Taylor"))

// const alex= hello()
// debugger

// Primative Data Types: (immutable & compared by value)
// - number
// - String
// - undefined
// - null
// - Symbol
// - boolean

const h = "hello"
const hi = "hello"
h[0] = "H"

// console.log(h === hi)

const arr = ["H", "e", "l", "l","o"]
const arr2 = ["H", "e", "l", "l","o"]
// arr[1] = "E"
// console.log(arr)
// console.log(arr === arr2)

// Object Datatypes
// - Function
// - Array
// - Objects

// falsy
// false
// undefined
// null
// 0
// ""
// NaN

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     switch (true){
//         case (i % 3 == 0 && i % 5 == 0):{
//             console.log("FizzBuzz");
//             break;
//         }
//         case (i % 3 == 0 ):{
//             console.log("Fizz");
//             break;
//         }
//         case (i % 5 == 0 ):{
//             console.log("Buzz");
//             break;
//         }
//         default:{
//             console.log(i);
//         }
//     }
// }

const nums = [1,2,3,4,5]

// destructive:

// .push -> add an element to end of array 
// .unshift -> add an element to front of array
// .pop -> removes last element
// .shift -> removes first element
// .splice -> removes elements between specified indexes

const removed = nums.splice(1,3)

// console.log(removed)

// non-destructive:
  // We use the ... or spread operator in order to copy and paste elements of an existing array into a "new" array

  let array = ['hello']
  let array2 = [...array, 'world']
  let array3 = ['world', ...array]
  // array is still ['hello']
  // array2 is ['hello', 'world']
  // array3 is ['world', 'hello']

  let numberList = [0,1,2,3,4,5,6]

  // slice allows you to slice our a new array from an older array
  numberList.slice(1, 5) // returns [1,2,3,4,5]
  numberList // is still [0,1,2,3,4,5,6]

//   Objects in Javascript are similiar to hashes in ruby with key / value pairs. For example:

  let alex = {
    name: "alex",
    age: 21, 
    profession: "Expert in finding 100 ways to not code something!"
  }
// However one added thing that javascript objects have that ruby hashes don't, are function definition values.

  let alex = {
    name: "alex",
    age: 21, 
    profession: "Expert in finding 100 ways to not code something!",
    description: function() {
      console.log(`Hello my name is ${this.name}, i am ${this.age} years old, and my profession is ${this.profession}`)
    }
  }

  alex.description() // logs Hello my name is Howard, i am 21 years old, and my profession is Expert in the wa
