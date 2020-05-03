// function sayGreeting(name) {
//   return `Good morning, ${name}`;
// }

const sayGreeting = (name = 'student') => `Good morning, ${name}!`;


console.log(sayGreeting('Maria'));


function getArea(width, length, unit = 'sq m') {
  const area = width * length;
  return `${area} ${unit}`;
}

console.log(getArea(1, 5));