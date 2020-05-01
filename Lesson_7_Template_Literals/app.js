const name = 'Luffy';
const age = 19;
const job = 'Pirate Captain';
const village = 'Foosha';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>Village: ' + village + '</li></ul>';

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>Village: ' + village + '</li>' +
        '</ul>'


// With template strings (es6)
function hello() {
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>Village: ${village}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
  </ul>
`;


document.body.innerHTML = html
