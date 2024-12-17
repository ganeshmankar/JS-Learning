const user = {
  username: "ganesh",
  price: 699,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome`);
      console.log(this);
  }

}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);

// function fun(){
//     let username = "ganesh"
//     console.log(this.username);
// }

// fun()

// const fun = function () {
//     let username = "Ganesh"
//     console.log(this.username); //can't use this in function like this
// }
//fun()

// arrow function
const fun =  () => {
  let username = "Ganesh"
  console.log(this);
}
// fun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ganesh"})

console.log(addTwo(3, 4))
