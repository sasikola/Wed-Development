// document.write()
// console.log()
// alert()

// Basics
// Variables, keywords and scope

// var, let and const

// var x; //declaration
// x = 20; //assignment / initialization
// var x = 30; // redeclaration
// x = 50; //re-assignment/ re-initialization

// // let
// let y; //declaration
// y = 20; //assignment / initialization
// y = 30; //reinitialization

// const
// const z = 10; // declaration and initialization

// scope
// visibility of a variable
// 1. global scope
// 2. function scope
// 3. block scope

// let message = "Hello";
// console.log(message);
// function myFunction() {
//   console.log(message);
// }

// let is a block scope

// if (true) {
//   let a = 10;
//   console.log(a);
// }

// function func(){
//     const c = 20
//     console.log(c);
// }

// Datatypes
// 1. primitive
// 2. non-primitive

// primitive data types:
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null

// string is nothing but sequence of zero or more characters.
// using double quotes or single quotes or backticks
// let x = "tony"
// let y = '20'
// let z = `true`

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// let x = 10;
// let y = 10.59879

// console.log(typeof x)
// console.log(typeof y)

// boolean
// true or false
// let x = true
// console.log(typeof x)

// undefined
// let y;
// console.log(y);
// y = 10;
// console.log(y);

// console.log(y);
// console.log(typeof y)
// null
// it is special value in javascript that represents empty or unknown value
// let x = null;
// x = 10;
// console.log(x);

// if (x === null) {
//   console.log("x is not null");
// } else if (x % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// non-primitive
// object
// arrays
// functions

// let x = 10;
// let y = "tony stark";

// name : value,
// let person = {
//   name: "tony",
//   age: 20,
//   isStudent: true,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//   },
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.address);
// console.log(person.address.city);

// person.name = "tony stark";
// console.log(person.name);
// console.log(person);

// Operators
// Arithmetic
// +, -, *, /, %,
// unary operators
//  ++, --
// Assignment
// =, +=, -=, *=, /=, %=,
// Comparison
// ==, ===, !=, !==, <, >, <=, >=
// Logical
// &&, ||, !
// operators are used to perorm some operations on data
// let a = 5;
// let b = 2;

// let addition = a + b;
// console.log("a + b = ", addition);

// let subtraction = a - b;
// console.log("a - b = ", subtraction);

// let multiplication = a * b;
// console.log("a * b = ", multiplication);

// let division = a / b;
// console.log("a / b = ", division);

// let modulus = a % b;
// console.log("a % b = ", modulus);

// post increament and pre increment
// console.log(a) //5
// a++  //5 -->  5+1

// ++a // 5+1 --> print(6)
// console.log(a++)
// console.log(a)
// console.log(++a)

// post decrement and pre decremnet
// console.log(a--)
// console.log(a)
// console.log(--a)

// let x = 5;
// let y = 10;

// x++
// console.log("x=", x )
// ++y

// console.log("y=", y )
// let result = x + y
// console.log(result)

// assignment operators
// to assing a value to the variable
// =, +=, -=, *=, %=
// let a = 5
// let b = a;
// console.log(b)

// // a += 10;  // a = a+10 --> a = 5+10
// a %= 10;  // a = a-10 --> a = 5-10
// console.log(a)

// comparison operators
// comparing two values
// ==, ===, !=, !==, >, <, >=, <=

// boolean values --> true or false

// console.log(5 == "5"); // true  //value
// console.log(5 === "5"); // false // value + datatype

// console.log(5 != "5")  // false
// console.log(5 !== "5")  // true

// console.log(5 >= 5) // false

// logical operators
// comparing two conditions
// &&, ||, !
// it will return a boolean values (true or false)

// let a = 5;
// let b = 3;

// &&
// True and True --> true
// true and false --> false
// false and true --> false
// false and false --> false

// console.log(a == 5 && b == 3); // true

// ||
// true and true --> true
// true and false --> true
// false and true --> true
// false and false --> false

// console.log(a == 5 || b == 2); // true

// !
// not of true --> false
// not of false --> true
// console.log(!(5 == 5) || !(2 == 2));
// console.log((3 == 2))

// let a = true;
// let b = false;
// let c = true;

// console.log((a || b)  && c)

// conditional statements
// boolean values (true or false)
// if, else, if else if

// let a = 13;
// if (a == 10) {
//   //false
//   console.log("the given number is ", a);
// }

// if (5 === 6) {
//   // false
//   console.log("the condition is true");
// } else {
//   console.log("The condition is false");
// }

// let age = prompt("Enter your age");
// // let age = 19;
// if (age >= 18) {
//   //false
// //   console.log("your age is ", age + " you are eligible for vote");
// console.log(`your age is ${age} and you are eligible for voting`)
//   console.log(typeof age);
// } else {
//   console.log(" your age is ", age + " you are not eligible for vote");
//   console.log(typeof age);
// }

// let a = Number(prompt("Enter a number"));
// let b = parseInt(prompt("Enter a number"));
// if (a) {
//   console.log("this is a number");
//   console.log(typeof a);
// }
// console.log(!(5 == 5));
// console.log((5 == 5) && (2 == 2));

// &&, ||, !

// !true  --> false
// !false --> true

// if else if

// let score = prompt("Enter your results")
// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else if (score >= 60) {
//   console.log("Grade D");
// } else {
//   console.log("exam not attended");
// }

// function formValidation() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let errorMessage = document.getElementById("errorMessage");

//   let errors = [];
//   if (name === "") {
//     errors.push("Name is required");
//   } else if (email === "") {
//     errors.push("Email is required");
//   } else if (password === "") {
//     errors.push("Password is required");
//   } else if (password < 8) {
//     errors.push("Password should be at least 8 characters long");
//   }

//   //   display errors
//   if (errors.length > 0) {
//     errorMessage.innerHTML = errors.join("<br>");
//     return false;
//   } else {
//     errorMessage.innerHTML = "Form submitted successfully";
//   }
// }

// ternary operator
//  condtion ?  statement1 : statement2

// 5 == 5 ? console.log("statement1") : console.log("Statement2")
// let a = 2;
// if (a % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// a % 2 === 0 ? console.log("Even") : console.log("Odd")

// Loops
// for
// while
// do while

// for(initialization; condtion; incr/decr)

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0
// while(condition){
//     statements
// i++
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i];
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }

// let numOfInputs = Number(prompt("How many inputs do you want?"));
// let sum = 0;
// for (let i = 0; i < numOfInputs; i++) {
//   let inputs = Number(prompt("Enter number" + (i + 1) + ":"));
//   sum += inputs; // sum = sum + inputs
// }

// console.log("The sum of the numbers is: ", sum);

// 7, 10, 3
// factorial
// 5 -> 5* 4* 3*2*1

// ternary operator

// if (false) {
//   console.log("Statement1");
// } else {
//   console.log("Statement2");
// }

// condtion ? statement1 : statement2

// let b = 10
// b == 11 ? console.log("Statement1") : console.log("Statement2")

// loops
// for(initialization; condition; incr/decr)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// while
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let num = Number(prompt("Enter a number"));
// let sum = 0;
// for (let i = 0; i < num; i++) {
//   let inputs = Number(prompt("Enter number: ", i + 1));
//   sum = sum + inputs;
// }
// console.log(sum);

// functions
// general function
// arrow function
// ananymous function
// self-invoking function/immediately invoking function

// let a = 10;
// let b = 3;
// let sum = a + b;

// console.log(sum)
// code reusablity
// less coding

// general function
// function Addition() {
//   let a = 10;
//   let b = 3;
//   let sum = a + b;
//   console.log(sum);
// }

// Addition()
// arrow function
// let Addition = () => {
//   let a = 10;
//   let b = 3;
//   let sum = a + b;
//   console.log(sum);
// };
// Addition();

// ananymous
// let Addition = function () {
//   let a = 10;
//   let b = 3;
//   let sum = a + b;
//   console.log(sum);
// };
// Addition()

// self-invoking function/immediately invoking function
// (function () {
//   let a = 10;
//   let b = 3;
//   let sum = a + b;
//   console.log(sum);
// })();

// function myFunc1(a, b) {
//   console.log(a + b);
// }

// myFunc1(2, 3);

// function myFunc2(a, b, c, d, e, f) {
//   a = 10;
//   b = 20;
//   return a + b + c + d;
// }
// let result = myFunc2();
// console.log(result);

// let myFunction = function () {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log(sum)
// };

// Arrays
// let x = [1, 2, 4, 5, 6];
// let y = ["apple", "orange"];
// let z = [true, false];

// let num = [12, 3, "apple", true];
// console.log(num[1]);

// console.log(num.length);
// push  --> adding element to the array from the end
// pop   --> removing element from end
// shift  --> removing element from beginning
// unshift  --> adding element from beginning

// num.push(10);
// console.log(num);
// num.unshift("element");
// console.log(num);
// num.pop();
// console.log(num);

// num.shift();
// console.log(num);

// let fruits = ["apple", "banana", "orange", "grape", "mobile"];

// splice --> changing the contents/items in the array by removing, replacing or adding elements
// console.log(fruits);
// console.log(fruits.splice(1, 3, "grape", "Blueberry"));
// console.log(fruits)

// using index value we can access array element
// methods in arrays
// push, pop, shift, unshift, slice and splice

// y.slice(1, 3) // 2 and 3
// y.splice(1, 2, 10, 20)  //

// console.log(y)

// toString()
// console.log(y.toString());
// to string method

// console.log(fruits.toString());
// console.log(fruits)
// console.log(fruits.length)
// // at
// let fruit = fruits.at(3)
// console.log(fruit)

// join
// console.log(fruits.join(" "))

// concat  --> merging two or more arrays in a new array

// let x = [1, 2, 3];
// let y = [4, 5, 6];
// let z = [8, 9, 10]

// flat  --> it creates a new array with sub-array elements
// let x = [[1,2], [3,4], [5,6]]
// [1,2,3,4,5,6]

// let newArray = x.flat()
// console.log(newArray)
// let newArray = x.concat(y, z)
// console.log(newArray)

// searching methods
// sorting methods
// iteration methods

// indexOf()
// it will search the array element and return its position

// console.log(x.indexOf(5))
// console.log(x.indexOf(3))

// let fruits = ["apple", "banana", "orange", "grape", "mobile"];
// console.log(fruits.indexOf("grape"))

// lastIndexOf(item, start)

// let position = fruits.lastIndexOf("orange", 3 );
// console.log(position);

// arra.includes(item)  --> it will return boolean value
// console.log(fruits.includes("john"))

// find(item) --> it will return the element
// let x = [1, 14, 3, 4, 5, 6];
// // even or odd  (num %2 === 0)

// let evenNumbers = x.find((i) => i % 2 === 0);
// console.log(evenNumbers);

// sorting methods --> by default in ascending order

// let fruits = ["banana", "apple", "orange", "grape", "mobile"];
// sort()
// console.log(fruits.sort());
// let sortedFruites = (a, b) => b.localeCompare(a);
// fruits.sort(sortedFruites);
// console.log(fruits);

// console.log(x.sort())
// let numbers = (a, b) => b - a;
// x.sort(numbers);
// console.log(x);

// toSorted
// let sortedFruits = fruits.toSorted();
// console.log(sortedFruits);
// toReversed()
// let revers = fruits.toReversed();
// console.log(revers);

// let reverseNumbers = x.toReversed();
// console.log(reverseNumbers);

// for loops

// iteration methods
// loops
// map
// filter
// reduce

// let x = [3, 14, 3, 1, 2, 4, 5, 6];

// for loop
// for each
// map
// filter
// reduce

// for (let i = 0; i < x.length; i++) {
//   console.log(x[i] + 2);
// }

// let sum = 0;
// for (let i = 0; i < x.length; i++) {
//   // sum = sum + x[i]
//   sum += x[i];
// }

// console.log(sum)

// finding max number in array
// let x = [3, 14, 3, 1, 2, 4, 5, 6];
// let min = x[0]; //3

// for (let i = 0; i < x.length; i++) {
//   if (x[i] < min) {
//     min = x[i];
//   }
// }

// console.log(min);

let fruits = [
  "banana",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
  "grape",
  "mobile",
];

// { banana :1, apple: 2, orange: 2}

// let count = {};
// for (let i = 0; i < fruits.length; i++) {
//   let fruit = fruits[i];
//   if (count[fruit]) {
//     count[fruit]++;
//   } else {
//     count[fruit] = 1;
//   }
// }
// console.log(count);

// let x = [3, 14, 3, 1, 2, 4, 5, 6];
// MAP

// x.map((i)=> {
//     console.log(i + 2)
// })
// %2===0
// let sum = x.map((i) => i + 2);
// console.log(sum);

// filter (if)
// let even = x.filter((i) => i % 2 === 0);
// console.log(even);

// let users = [
//   { name: "John", age: 25, country: "USA" },
//   { name: "Alice", age: 30, country: "UK" },
//   { name: "Bob", age: 20, country: "USA" },
//   { name: "Charlie", age: 28, country: "USA" },
//   { name: "David", age: 35, country: "UK" },
// ];

// let persons = users
//   .filter((i) => i.country === "USA")
//   .map((user) => user.name);
// console.log(persons);

// REDUCE
// let x = [3, 14, 3, 1, 2, 4, 5, 6]; // single value
// let sum = x.reduce((i, j) => i - j);
// console.log(sum);

// string
// using "" '' ``
// at()
// chatAt()
// concat()
// includes()
// indexOf()
// length
// replace
// split()
// slice
// splice
// substr
// toLowerCase
// toUpperCase
// trim

// let x = "Hello world";
// console.log(x.length)
// at  --> it will return indexed character from a string
// let character = x.at(0);
// let character = x.charAt(8);
// console.log(character);

// concat --> it will add two or more strings

// let result = x.concat("kajhga")
// console.log(result)

// includes --> it will return a boolean values
// let rsult = x.includes("j")
// console.log(rsult)

// indexOf
// let rsult = x.indexOf("w");
// console.log(rsult);

// replace -->

// let result = x.replace("Hello", "Hiii")
// console.log(result)
// let x = "Hello world";

// let result = x.split("")  // string to array
// console.log(result)

// let result = x.slice(2, 8)
// console.log(result);

// substr, substring
// let result = x.substr(1, 8);
// let result = x.substring(1, 8);
// console.log(result);

// toLowerCase
// let result = x.toUpperCase();
// console.log(result)

// map, filter and reduce

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    inStock: true,
  },
  {
    id: 2,
    name: "SmartPhone",
    price: 800,
    inStock: false,
  },
  {
    id: 3,
    name: "Tablet",
    price: 600,
    inStock: true,
  },
  {
    id: 4,
    name: "Headphones",
    price: 400,
    inStock: true,
  },
  {
    id: 5,
    name: "SmartWatch",
    price: 300,
    inStock: false,
  },
];

// 1. filter the products using stock

let inStockProducts = products.filter((product) => product.inStock === true);
console.log(inStockProducts);

// 2. iterate the three object to get the price
let inStockPrice = inStockProducts.map((product) => product.price);
console.log(inStockPrice);

// 3. using reduce method
let totalPrice = inStockPrice.reduce((prev, curr) => prev + curr);
console.log(totalPrice);

// DOM --> Document Object Model
// it represents the structure of a web page/document
// we can access the html elements

// using class
// using ID

// query selector
// query selector all

// tag name

// let heading = document.getElementById("heading")
// let button = document.getElementsByClassName("btn");

// let heading = document.querySelector(".heading");
// heading.style.color = "red";

// let heading = document.querySelectorAll(".heading")[0]
// heading.style.color = "red";

// let heading = document.getElementsByTagName("h1")[0]
// heading.style.color = "red";
// let btn = document.getElementById("btn");
// btn.addEventListener("click", changeColor);
// function changeColor() {
//   let colors = ["red", "blue", "yellow"];
//   let box = document.getElementsByClassName("box");
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.backgroundColor = colors[i % colors.length];
//   }
// }

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

// let btn = document.getElementById("btn");
// let title = document.getElementById("title");

// btn.addEventListener("click", myFunc);
// btn.addEventListener("click", ()=>{

// })

// function myFunc() {
// title.style.color = "red";
// title.style.fontSize = "100px";
// title.innerHTML = "<p>Welcome</p>";
// title.innerText = "<p>Welcome</p>"
// }

// innterHTML
// innterText

// fetch
// promises
// async, await
// callback functions
// closures

// let heading1 = document.getElementsByClassName("heading1")[0]
// let heading2 = document.getElementById("heading2");

// let heading1 = document.getElementsByTagName("h1")[0];
// let heading2 = document.getElementsByTagName("h2")[0];

// heading2.style.color = "red";
// heading1.style.color = "red";

//

// synchrouns and asynchrous
// fetch
// promises  ->  pending, fullfill(resovlve), reject
// async, await  --> handling promises
// try catch  --> error handling

// function myFucn async(){

//   try {
//     let todos = await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   console.log(todos);
//   } catch (error) {
//     console.log(error)
//   }

// }

async function myFunc() {
  try {
    let users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
}
// callback --> it is a function that is passed as an argument of another function
// API
// ui  -> request
// server (logics)
// database


