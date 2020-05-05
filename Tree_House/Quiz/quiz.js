let questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
let correctAnswers = 0;
let question;
let answer;
let response;
let html;
let correct = [];
let wrong = [];

function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;5
}

function buildList(arr) {
  let listHTML = `<ol>`;
   for (let i = 0; i < arr.length; i += 1) {
      listHTML += `<li>${arr[i]}</li>`;
   }
  listHTML += `</ol>`;
  return listHTML;
}

for (let i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if ( response === answer ) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = `You got ${correctAnswers} question(s) right`;
html += `<h2>You got these questions correct:</h2>`;
html += buildList(correct);
html += `<h2>You got these questions wrong:</h2>`;
html += buildList(wrong);
print(html);