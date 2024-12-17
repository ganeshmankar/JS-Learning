// let score = "90"; //=> 90
// let score = "90xyz"; //=> NaN
// let score = null; //=> 0
// let score = undefined;
let score = true; //=> true=1 false=0


console.log(typeof score);

let inNumber = Number(score);
console.log(typeof inNumber);
console.log(inNumber);

let a = 1;
// let a = "";
// let a = "hey";

let boola = Boolean(a);
console.log(boola);

let some = 23;
let stringSome = String(some);
console.log(stringSome);
console.log(typeof (stringSome));

console.log('--------------------------OPERATIONS----------------------------');

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2); //All converts in string => 122
console.log(1 + 2 + "2");//32

console.log(+true); //=>1


