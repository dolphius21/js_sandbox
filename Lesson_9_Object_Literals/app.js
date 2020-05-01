const person = {
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 39,
  email: 'steve@aol.com',
  hobbies: ['music', 'movies', 'sports'],
  address: {
    city: 'Brooklyn',
    state: 'NY'
  },
  getBirthYear: function() {
    return 2020 - this.age;
  }
}
let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mark', age: 36}
]