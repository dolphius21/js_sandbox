const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getProfiles(json) {
  const profiles = json.people.map(person => {
    const craft = person.craft;
    if (person.name == "Anatoly Ivanishin") {
        person.name = "Anatoli_Ivanishin"
    }
    return fetch(wikiUrl + person.name)
        .then( response => response.json() )
        .then( profile => {
          return { ...profile, craft };
        })
        .catch( err => console.log('Error Fetching Wiki: ', err) )
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
      <span>${person.craft}</span>
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
  event.target.textContent = 'Loading...';
  fetch(astrosUrl)
  .then( response => response.json() )
    .then(getProfiles)
    .then( generateHTML )
    .catch( err => {
      peopleList.innerHTML = '<h3>Something went wrong!</h3>'
      console.log(err)
    })
    .finally( () => event.target.remove() )
});