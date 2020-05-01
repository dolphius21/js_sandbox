const id = 100;

// Equal to
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Not equal to
if (id != 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// strictly equal to
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// strictly not equal to
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}


// test if undefine
if (typeof val !== 'undefined') {
  console.log(`The ID is ${val}`);
} else {
  console.log('NO ID');
}


// Greater or Less Than
if (id > 200) {
  console.log(`CORRECT`);
} else {
  console.log('INCORRECT');
}

if (id < 200) {
  console.log(`CORRECT`);
} else {
  console.log('INCORRECT');
}


// If Else
const color = 'yellow';
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else if (color === 'green') {
  console.log('Color is green');
} else {
  console.log('Color is yellow');
}


// Logical Operators
const name = 'Steve';
const age = 21;
// And &&
if (age > 0 && age < 18) {
  console.log(`${name} is a minor`);
} else {
  console.log(`${name} is an adult`);
}
// Or ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} can participate the race`);
}

// Ternary Operator
console.log( id === 100 ? 'CORRECT' : 'INCORRECT');