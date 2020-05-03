function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper) + 1;
}

let counter = 0;

while ( counter < 10 ) {
  let randomNumber = getRandomNumber(6);
  document.write( randomNumber + ' ' );
  counter += 1;
}