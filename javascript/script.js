// document.write()
// console.log()
// alert()

// Basics
// Variables, keywords and scope

// var, let and const

var x; //declaration
x = 20; //assignment / initialization
var x = 30; // redeclaration
x = 50; //re-assignment/ re-initialization

// let
let y; //declaration
y = 20; //assignment / initialization
y = 30;


// const
const z = 10; // declaration and initialization

// scope
// visibility of a variable
// 1. global scope
// 2. function scope
// 3. block scope

let message = "Hello";
console.log(message);
function myFunction() {
  console.log(message);
}

// let is a block scope

if (true) {
  let a = 10;
  console.log(a);
}

function func(){
    const c = 20
    console.log(c);
}


func();


