class User {
  constructor(email, password){
      this.email = email;
      this.password = password
  }

  get email(){
      return this._email.toUpperCase()
  }
  set email(value){
      this._email = value
  }

  get password(){
      return `${this._password}abc123`
  }

  set password(value){
      this._password = value
  }
}

const userOne = new User("gmankar03@gmai.com", "6969")
console.log(userOne.email);