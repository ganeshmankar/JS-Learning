//singleton object->
// const tinderUser = new Object()

//non-singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "me@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ganesh",
            lastname: "mankar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "me1@gmail.com"
    },
    {
        id: 2,
        email: "me2@gmail.com"
    },
    {
        id: 3,
        email: "me3@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Bakchodi",
    price: "69",
    courseInstructor: "me"
}

// course.courseInstructor
//to call this its so big so we can do following shit: (restructuring)
const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
console.log(instructor);

