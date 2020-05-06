let message = '';
let strawhat;
let search;

function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;5
}

function strawhatProfile ( strawhat ) {
  let profile = `<h2>${strawhat.name}</h2>`;
  profile += `<p>Profession: ${strawhat.profession}</p>`;
  profile += `<p>Bounty: ${strawhat.bounty}</p>`;
  return profile;
}

while (true) {
  search = prompt('Search strawhat profile: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (let i = 0; i < strawhats.length; i += 1) {
    strawhat = strawhats[i];
    if (strawhat.name === search) {
      message = strawhatProfile(strawhat);
      print(message);
    }
    break;
  }
}



print(message);
