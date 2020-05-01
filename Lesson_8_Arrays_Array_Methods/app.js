// Create some arrays

const numbers = [43,56,33,23,44,25,5];
const numbers2 = new Array(22,45,33,76,56);
const numbers3 = [43,56,33,23,44,25,5];
const numbers4 = [86,56,72,23,77,25,15];
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val= numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(44);


// Mutating Arrays
// add to the end of the array
numbers.push(250);
// add to the beginning of the array
numbers.unshift(120);
// take of from the end
numbers.pop();
// take of from the beginning
numbers.shift();
// splice values
numbers.splice(2, 5);
// reverse
numbers.reverse();

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sort arrays
val = fruit.sort();
val = numbers2.sort();

// Use the  "compare function"
val = numbers3.sort(function(x, y) {
  return x - y;
});

// Reverse sorting
val = numbers3.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers4.find(under50)

console.log(numbers);
console.log(val);
