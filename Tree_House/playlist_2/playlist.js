let playList = [
  [`Sugra, We're Goin Down`, `Fall Out Boy`],
  [`Sweet Disposition`, `The Temper Trap`],
  [`Kings And Queens`, `Thirty Seconds To Mars`],
  [`Meant To Live`, `Switchfoot`],
  [`Starlight`, `Muse`],
  [`Ocean Avenue`, `Yellowcard`],
  [`Looking Up`, `Paramore`],
  [`Boston`, `Augustan`],
  [`Swing, Swing`, `The All American Rejects`],
  [`Stacy's Mom`, `Fountains Of Wayne`]
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  let listHTML = '<ol>';
  for ( let i = 0; i < songs.length; i += 1) {
    listHTML += `<li><strong>${songs[i][0]}</strong> by ${songs[i][1]}</li>`;
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);