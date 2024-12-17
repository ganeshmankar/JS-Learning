"use strict"; //treat all js code as newer version no need to use it every time

//alert(3+3); //We are using nodejs not browser

let name = "Ganesh";
let age = 21;
let isSingle = false;
let state;


console.log(typeof name);
console.log(typeof null);//Its an object
console.log(typeof undefined);

let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 123456789n; //bigInt


//PREMITIVE DATATYPES(stack => copy is given)
//Number (range 2 to the power 53)
//BigInt
//String
//Boolean
//null(standalone value)
//undefined
//Symbol(unique)

//REFERENCE OR NON-PREMITIVE DATATYPES(Heap => reference is given)
//Arrays
//Object
//Functions

const heroes = ["iron-man", "spider-man", "thor", "dr strange", "captain america"];
let obj = {
  age: 21,
  name: "ganesh",
}
const myFunction = function(){
  console.log("Fuck you!!!");
}



