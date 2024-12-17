//OBJECT LITERAL


const mySym = Symbol("key1"); //declaring symbol

const user = {
  name: "Ganesh",
  "full name": "Ganesh Nandkumar Mankar",
  // mySym: "myKey1",//=> datatype is string but we want it as symbol
  [mySym]: "myKey1",
  age: 21,
  location: "Pune",
  email: "ganesh2003@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "friday"],
}

// console.log(user.email);
// console.log(user.full name); //=>not possible so usually don't use this way

// console.log(user["email"]);
// console.log(user["full name"]); //=>use this

// console.log(user[mySym]); //syntax for printing symbol through a object
// console.log(typeof user[mySym]);

// Object.freeze(user);//no changes will happen even ig you try to
// user.email = "ganesh28@gmail.com";
// console.log(user["email"]);

user.greetings = function(){
  console.log("Hello fuck you!!!");
}

user.greetings1 = function(){
  console.log(`Hello fuck you, ${this["name"]}!!!`); //this is used for accessing the object's properties
}

console.log(user.greetings());
console.log(user.greetings1());





