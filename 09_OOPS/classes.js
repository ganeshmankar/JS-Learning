// ES6

class User {
  constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password
  }

  encryptPassword(){
      return `${this.password}abc`
  }
  changeUsername(){
      return `${this.username.toUpperCase()}`
  }

}

const userOne = new User("ganesh.mankar", "gmankar03@gmail.com", "1234")

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

// behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}


const userTwo = new User("vinayak.yadav", "vinu@gmail.com", "6969")

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());