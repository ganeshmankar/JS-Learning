// const promiseOne = new Promise(function(resolve, reject){
//   //Do any async tasks
//   //DB calls
//   setTimeout(() => {
//     console.log("Async task 01");
//     resolve();
//   }, 2000);
// })
// promiseOne.then(function(){
//   console.log("Promise consumed !");
// })




// new Promise(function(resolve, reject){
//   setTimeout(() => {
//     console.log("Async task 02");
//     resolve();
//   }, 2000);
// }).then(function(){
//   console.log("Async task 02 resolved !");
// })

// const promiseThree = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve({username:"ganesh-mankar", email:"gmankar03@gmail.com"})
//   }, 2000)
// })
// promiseThree.then(function(user){
//   console.log(user);
// })



// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     let error = true
//     if(!error){
//       resolve({username: "ganesh-mankar", password: "244466666"})
//     }else{
//       reject('ERROR: SOMETHING WENT WRONG !')
//     }
//   }, 2000);
// })
// promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// .then((username) => { //This is chaining we get value fron previous then()
//   console.log(username);
// })
// .catch(function(error){
//   console.log(error);
// }).finally(() => { //default
//   console.log("The promise is either resolved or rejected !");
// })




// const promiseFive = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     let error = true
//     if(!error){
//       resolve({username: "ganesh.mankar", password: "123456789"})
//     }else{
//       reject('ERROR: SOMETHING WENT WRONG !')
//     }
//   }, 2000);
// })

// async function consumePromiseFive(){
//   try { //look at the notes for this
//     const response = await promiseFive
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive()



//using async and await
// async function getAllUsers(){
//   try {
//     const response = await fetch('https://api.github.com/users/ganeshmankar')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("E: ", error); 
//   }
// }
// getAllUsers()




fetch('https://api.github.com/users/ganeshmankar')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})
