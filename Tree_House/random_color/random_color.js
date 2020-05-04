let html = '';
let rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  let color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for ( let i = 1; i <= 10; i += 1 ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);