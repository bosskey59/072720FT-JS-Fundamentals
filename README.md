# Javascript Fundamentals

## Todays Agenda
- Variables 
- Hoisting 
- Functions
- Arrow Functions
- Default Arguments 
- Return 
- DataTypes
- Conditionals   
- Arrays 
- Objects

Comments
Multiline comment
/*
  Study Group Agenda:
  - Comments
  - Variables
  - Hoisting
  - Functions
  - scope
  - DataTypes
  - Conditionals
  - Loops
  - Arrays
  - Objects (if time)
*/
single line comments
// This is a one line Comments
// TODO: continue working on feature
// this is /* some comment */ and this is us continuing code
Variables
Declaration Variable types:
// declaration variableName = value
var variableName = "someValue"
let variable2Name = "somevalue"
const variable3Name = "someValue"

Variable type meanings:
var = no restraints and gets hoisted. Never use
let = can be re-assigned but not re-declared. Does not get hoisted. Use in place of var.
const = can't be re-assigned and does not get hoisted. Use when you want the value to not change. If you set to an array, when you add to the array, it doesn't change the array from the previous array in memory so arrays are fine. It just means you can't change the array to an object.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

Re-declaring variables using the variables defined above:
var variableName = "someOtherValue"; // works
let variable2Name = "someOtherValue"; // gives error
variable2Name = "someOtherValue"; // works
const variable3Name = "someOtherValue"; // gives error
variable3Name = "someOtherValue"; // gives error

What really happens when you hoist
console.log(greeting) // logs undefined
var greeting = "hello";

gets hoisted to:
var greeting; // gets declared at the top or hoisted

console.log(greeting); // logs undefined

greeting = "hello world!"
Functions
Different Kinds of functions:
// standard hoisted function declaration
 function greeting(name = "Javascript Programmer") {
   console.log(`Hello, ${name}`);
 }
// let function expression, not hoisted
 let greeting = function greeting2(name = "Javascript Programmer") {
   console.log(`Hello, ${name}`);
 }
 greeting();
// let declared arrow function, not hoisted
 let greeting = (name = "Javascript Programmer") => {
 console.log(`Hello, ${name}`);
}

Simplier Arrow function syntax with implicit returns, no {}:
// one parameter, fine to add parameter with no ()
let greeting = name => `Hello, ${name}!`;

// multiple parameters, need ()
let addTwoNums = (num1, num2) => num1 + num2;


Scope
Global Scope and the Local Scope:
let pet = "dog";

function whatKindOfPet() {
   // since we declared pet again inside function it becomes a local variable`
  let pet = "cat";
  console.log(pet);
}

whatKindOfPet(); // console logs cat;
console.log(pet); // since the global variable was ignored due to a local variable declared with the same name, dog gets console logged.

Re-Assigning Global Variables in the scope of a function:
let pet = "dog";

function whatKindOfPet() {
   // re-assigns the global pet variable
  pet = "cat";
  console.log(pet);
}

whatKindOfPet(); // console logs cat;
console.log(pet); // since the global variable was re-assigned and a local variable not declared, pet re-assigns to cat in the function and cat gets console logged.

Datatypes
Primitive Datatypes(immutable & compared by value):
  1. Number
  2. String
  3. Undefined
  4. Symbol
  5. Null
  6. Boolean

Object Datatypes(can change things in array & can’t compare them):
  1. Function
  2. Object
  3. Array


// falsy
false - boolean
undefined - default internal version of no value or no declaration
null - no value same as nil in ruby
0 - 0 is falsy in javascript
“” - empty string.
NaN - Not a Number

//truthy
All else
Conditionals
Example If Condition:
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



Example of switch:
for (var x = 0; x <= 20; x++) {
  switch (true) {
    case (x % 5 === 0 && x % 3 === 0):
        console.log("FizzBuzz");
        break;
    case x % 3 === 0:
        console.log("Fizz");
        break;
    case x % 5 === 0:
        console.log("Buzz");
        break;
    default:
        console.log(x);
        break;
  }
}

Looping
For Loop: To break down the for loop, it is divded into 3 steps, declaring a counter variable (here it's i), the condition as to when to stop iterating, so as long as i is less than the amount of elements in our array. Then we call i++ to increment i by 1.
let array = [1,2,3,4,5];

for(let i = 0; i < array.length; i++) {
  console.log(array[i] * 5);
}

// prints out 5, 10, 15, 20, 25

For In Loop: we assign a variable (name) to represent each element inside the array
let array = [1,2,3,4,5];

for(let number of array) {
  console.log(number * 5);
}

// prints out 5, 10, 15, 20, 25

while loop: Same as ruby, we give a condition as to when to break out of the loop
let stoppingNumber = 15;
 let startingNumber = 0;
 while(startingNumber < stoppingNumber) {
  console.log(++startingNumber); // adding the ++ in front of a number will increment first before displaying the incremented number
 }
 
 // prints out 1 - 14

do while loop: This loop will always run at least once:
do {
  console.log('I will only log once');
} while(false);

here's an example of it running multiple times:
let i = 0;
do {
  console.log(++i);
} while(i < 16);

// prints 1-15
Arrays
The structure of arrays is the same as Ruby in many ways.
creating an array:
let array = []

However in javascript there are some key differences. One of the key differences is that you can non-destructively modify an array. Meaning that you get a new array that looks like the old array, but same change had occured. We'll go through the destructive modifiers first and then go to the non-destructive.
Destructive Array Modifiers
adding to end of an array: The shovel method doesn't exist in javascript, but same as ruby's push method.
let array = []

array.push("hello")

array // now equals ["hello"]

array.push("world")

array // now equals ["hello", "world"]

adding to beginning of array:
let array = [];

array.unshift("Hello");

array // array now equals ["Hello"]

array.unshift("World");

array // array now equals ["World", "Hello"]

Removing from end of an array:
let array = ["hello", "world"]
array.pop();
array // array now equals ["hello"]

Removing from front of an array:
let array = ["hello", "world"]
array.shift();
array // array now equals ["world"]

Non-Destructive Modifiers:
making a clone of the array:
let array = ["hello", "world"]
 
 let newArray = [...array] // the ...array is our way of telling javascript to give us back an entirely new array, but keep all the elements inside the array variable

making a clone of the array and adding a new element in the front:
let array = ["world"]
 
 let newArray = ["hello", ...array]
 array // array is still ["world"]
 newArray // newArray is ["hello", "world"]

When we break down the above process in steps, we are saying, lets create a new array []. Lets insert "hello" into the array ["hello"]. Now lets add all of the elements after the "hello" element ["hello", "world"].
So now knowing that, we can expect adding to the end of an array non-destructively being something super similiar:
let array = ["hello"];
let newArray = [...array, "world"];

array // stays ["hello"]
newArray // becomes ["hello", "world"] as the array elements was spread before we added the last element in the new array we created.

Non-destructively removing an element from the beginning of an array:
// we use slice(startNumber, upToButNotIncludingEndIndex);
let array = [0,1,2,3,4,5]

let newArray = array.slice(1, array.length) // returns [1,2,3,4,5] a new array, we add 1 because the 1 index is the second element and thats the element we want to start slicing our new array from. Then we add array.length, since we grab all the elements up to but not including this number index wise, we are able to get all of the remaining elements.

array is still [0,1,2,3,4,5]
newArray is [1,2,3,4,5]

And the same with removing from the end of an array:
let array = [0,1,2,3,4,5];

let newArray = array.slice(0, array.length - 1); // we start at the 0 index and say we want up to but not including the last index value of this array leaving out the element at the last index.

array is still [0,1,2,3,4,5]
newArray is [0,1,2,3,4]
