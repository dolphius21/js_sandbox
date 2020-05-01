let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);
// toString()
val = (5).toString();
val = (true).toString();
// Output
console.log(val);
console.log(typeof val);
console.log(val.length);


// String to numbers
val = Number('5');
// Bool to numbers
val = Number(true);
val = Number(false);
val = Number(null);
// Results to NaN
val = Number('hello');
val = Number([1,2,3]);
// parseInt
val = parseInt('100.31');
// parseFloat
val = parseFloat('100.31');
// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


// type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
// Output
console.log(sum);
console.log(typeof sum);

