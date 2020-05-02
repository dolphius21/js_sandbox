// For Loop

for(let i = 1; i <= 10; i++) {
  if (i === 2) {
    console.log('2 is better than 1');
    continue;
  }

  if (i === 5) {
    console.log("It's better that we break");
    break;
  }
  console.log('Number ' + i);
}


// While Loop

let i = 1;

while (i <= 10) {
  console.log('Number ' + i);
  i++;
}


// Do While Loop

let x = 100;

do {
  console.log('Number ' + x);
  x++;
}

while (x <= 10); 


// Loop through an array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}


// forEach loop

cars.forEach(function(car) {
  console.log(car);
})


// Map

const users = [
  {id: 1, name: 'Luffy'},
  {id: 2, name: 'Zoro'},
  {id: 3, name: 'Nami'}
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);


// For In Loop

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}