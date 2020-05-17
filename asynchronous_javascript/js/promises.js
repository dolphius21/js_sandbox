const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject( Error(xhr.statusText) );
      }
    };
    xhr.onerror = () => reject( Error('A network error occured') );
    xhr.send();
  });
}

function getProfiles(json) {
  const profiles = json.people.map(person => {

    if (person.name == "Anatoly Ivanishin") {
        person.name = "Anatoli_Ivanishin"
    }
    return getJSON(wikiUrl + person.name);
   });
   return Promise.all(profiles);
}

function generateHTML(data) {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    if (person.type === "standard") {
      section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>`;
    } else {
      section.innerHTML = `
      <h2>${person.title}</h2>
      <p>No description available</p>`;
    }
  })
}

btn.addEventListener('click', (event) => {
  getJSON(astrosUrl)
    .then(getProfiles)
    .then( generateHTML )
    .catch( err => console.log(err) )
  event.target.remove();
});