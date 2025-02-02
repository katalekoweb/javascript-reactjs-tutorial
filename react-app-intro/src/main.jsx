import { Person } from "./classes/person";
import Teacher from "./classes/teacher";

// Default -> import ... from ''
// Named -> import { ... } from ''

// var -> function
// let -> block declared
// const -> block

// function sayHello () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);   
//   }

//   console.log(i);
// }

// sayHello()

// const x = 1 // constant
// x = 2

// @ 2 OBJECTS // collection of key value
const person = {
  name: 'Mosh',
  walk: function () {

  },
  talk() {
    console.log("Yeahh");    
  }
}

// console.log(person.name);
// console.log(person['name']);
// person.talk()

// THIS
const animal = {
  name: "Dog",
  walk() {
    console.log(this);    
  }
}

// animal.walk()

const walk = animal.walk.bind(animal) 
// walk()

// ARROW FUNCTIONS
const square = function (number) {
  return number * number;
}

const squareArray = (number) => {
  return number * number;
}

const squareArray2 = number => number * number;

console.log(squareArray2(4));

// FILTER
const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
]

const activeJobs = jobs.filter(function (job) {
  return job.isActive
})

const activeJobsArrow = jobs.filter((job) => job.isActive)

// ARROW FUNCTIONS AND THIS
// const person2 = {
//   name: 'Kata',
//   talk() {

//     var self = this

//     // anonymous functions dont get this function

//     // setTimeout(function () {
//     //   console.log("self", self); 
//     // }, 1000)

//     setTimeout(() => {
//       console.log("this", this); 
//     }, 1000)
       
//   }
// }

// person2.talk()

// ARRAY MAP
const colors = ["red", "green", "blue"]

// const items = colors.map(function (color) {
//   return "<li>"+ color +"</li>"
// })

// const items = colors.map((color) => `<li> ${color}</li>`)
// console.log(items);

// OBJECT DESTRUCTURING

const address = {
  street: "",
  city: "",
  country: ""
}

// mode 1
// const street = address.street
// const city = address.city
// const country = address.country

// mode 2
const {street: st, city, country} = address

// SPREED OPERADOR
const first = [1,2,3]
const second = [4,5,6]

// mode 1
const combined = first.concat(second)

// mode 2 - spreed
const combined2 = [...first, 2.6, ...second]
// console.log(combined2);

const clone = [...first]
// console.log(clone, first);

const firstObject = {name: 'Kata'}
const secondObject = {job: 'Software Engineer'}

const combinedObjets = {...firstObject, ...secondObject}

// CLASSES
const person3 = {
  name: 'Kata',
  walk() {
    console.log("Walking...");    
  }
}

const person_instance = new Person("Kataleko")
// person_instance.name
// person_instance.walk()


// const teacher = new Teacher('Kataleko', 'Bachelor Computer Cience')
// console.log(teacher.name);
// teacher.teach()

// Modules
const teacher = new Teacher('Kataleko', 'Bachelor Computer Cience')
teacher.teach()