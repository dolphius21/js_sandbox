let playlist = [
  `You Say Run`,
  `You Can Become a Hero`,
  `I Will Become a Hero!`,
  `Anguish Of The Quirkless`,
  `Symbol of Peace`,
  `"Dependable! Cheerful Person" Wind Adlib`,
  `Various Quirks`,
  `Villain`,
  `I Am Here!`,
  `Flustered`,
  `Uh-oh?`,
  `Hero's Shadow`,
  `Mysterious`,
  `Rampaging Evil`,
  `Villain Invasion`,
  `Bright and Cheerful`,
  `Rebellious Youth`,
  `Stealthy Steps`,
  `Battle Training`,
  `Darkness Dominates The Heart`,
  `Mind of Evil`,
  `Spreading Anxiety`,
  `The Threat of Offense and Defense`,
  `Berserk Battle`,
  `Analysis`,
  `Noisy Battle`,
  `Mellow Twilight`
]

function print(message) {
  document.write(message);
}

function printList(list) {
  let listHTML = `<ol>`;
  for (let i = 0; i < list.length; i += 1) {
    listHTML += `<li>${list[i]}</li>`;
  }
  listHTML += `</ol>`;
  print(listHTML);
}

printList(playlist);