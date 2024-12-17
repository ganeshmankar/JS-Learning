// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ganesh = function(){
    console.log(`ganesh is present in all objects`);
}

Array.prototype.heyGanesh = function(){
    console.log(`Ganesh says hello`);
}

// heroPower.ganesh()
// myHeros.ganesh()
// myHeros.heyGanesh()
// heroPower.heyGanesh()

// inheritance

const User = {
    name: "ganesh.mankar",
    email: "gmankar03@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Javascipt',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ganesh-mankar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ganesh".trueLength()
"rasmalai".trueLength()