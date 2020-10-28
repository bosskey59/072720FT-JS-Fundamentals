// console.log("in js file")

var a = "a" // redeclare, has hoisting, never use it
const b = "b" //no redeclare, you can't change the value of this.
let c = "c" // no redeclare, you can change the value of this.

 c = "z"
// let c = "z"



//function declration also get hoisted
// function greeting(name="World"){
//   let c = "world"  //block scoping
//   return (`Hello ${name}!`)
// }



const greeting2 = function(){
  return (`Hello World!`)
}

// let greeting2 = function(name){
//   return (`Hello ${name}!`)
// }

const greeting3 = () => (`Hello World!`)

// greeting4(name) =>(`Hello ${name}!`)

console.log(greeting3())

// debugger

/*
multi
line
comment
*/

// DataTypes
//primative datatypes
// - strings
// - numbers
// - undedined
// - null
// - boolean
// - Symbol

//Object
// - Object
// -function
// - array 


// const cat = "cat"
// const cat2 = "cat"

// const zero = [1,2,3]
// const zero2 = [1,2,3]

// conditionals

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//       console.log("Fizz");
//   } else if (i % 5 == 0) {
//       console.log("Buzz");
//   } else {
//       console.log(i);
//   }
// }

// for (var x = 0; x <= 20; x++) {
//   switch (true) {
//     case (x % 5 === 0 && x % 3 === 0):
//         console.log("FizzBuzz");
//         break;
//     case x % 3 === 0:
//         console.log("Fizz");
//         break;
//     case x % 5 === 0:
//         console.log("Buzz");
//         break;
//     default:
//         console.log(x);
//         break;
//   }
// }

// for (let x = 0; x <= 20; x++) {
//   console.log(x)
// }

const nums = [1,2,3,4,5,6,7,8,9]


// for (let x = 0; x < nums.length; x++) {
//   console.log(nums[x])
// }


// function cB(num){
//   console.log(num)
// }

// const cB2 = num => console.log(num)

// function hello() {
//  console.log("Hello World!")
// }

// nums.forEach(hello)

const h1Tag = document.querySelector("h1")

// const cB = (e) => {
//   debugger
// }

document.addEventListener("keydown", function(e){
  debugger
})

// loose comparison ==
// strict comparison === takes into account the data type for it be equal