var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var x = cw/4.5;
var y = ch/7.5;

var red = 199;
var blue = 120;

var a = 40;

for (var squareCounter = 0; squareCounter<5; squareCounter++) {
  for (var i = 0; i < 5; i++){
    context.fillStyle = 'rgb(' + red + ', 79, ' + blue + ')';
    context.fillRect(x, y, a, a);
    x += 45;
    red -= 7;
  }
  x -= i*45;
  y += 45;
  blue += 15;
}
