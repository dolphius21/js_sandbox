// var, let, const

// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// Init var

// var greeting;
// console.log(greeting);

// greeting = 'Hello';
// console.log(greeting);

// characters that can be use as a variable name are letters, numbers, _, $
// cannot start with a number

// Multi word vars

var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case


// let
// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);


// const
// const name = 'John';
// console.log(name);
// cannot reassign
// name = 'Sara';
// Have to a assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = '32';

console.log(person)

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);