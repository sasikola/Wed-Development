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
// if, else, else if

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