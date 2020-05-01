const firstName = 'Luffy';
const lastName = 'Monkey';
const middleInitial = 'D.';
const age = 19;
const str = 'Hello there my name is Luffy';
const tags = 'web design, web development, programming';
let val;

// Concatenation
val = lastName + ' ' + middleInitial + ' ' + firstName;
val = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old.';

// Append
val = 'Roronoa ';
val += 'Zoro';

// Escaping
// val = 'That's awesome, I can't wait';
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()
val = firstName.indexOf('f');
val = firstName.lastIndexOf('f');

// charAt()
val = firstName.charAt('0');

// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-4);

// split()
val = str.split(' ');
val = tags.split(', ');

// replace()
val = str.replace('Luffy', 'Zoro');

//includes()
val = str.includes('Hello');

console.log(val);