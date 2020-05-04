let randomNumber = getRandomNumber(10);
let guess;
let attempts = 0;
let correctGuess = false;

function getRandomNumber(upper) {
  let num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  attempts += 1;
  if ( parseInt(guess) === randomNumber ) {
    correctGuess = true;
  }
} while ( ! correctGuess)

document.write(`<h1>You guessed the number!</h1>`);
document.write(`<p>It took you ${attempts} attempts to guess the number ${randomNumber}</p>`);