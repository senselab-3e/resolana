var socket;
var splash = "";

var font,
  fontsize = 29;

var x = 100;
var y = 100;

var xspeed = 2.5;
var yspeed = 0.5;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  textFont("Asap");

  socket = io.connect();
  socket.on('mouse', dialogue);

 // background(288, 17, 65);
}

let hue = 0;
let saturation = 0;
let saturation1 = 0;
let mar = 0;
let suop = 0;
let borrar = 0;
let borrar_all = 0;

function draw() {

  mar++;
  suop++;
  borrar++;
  borrar_all++;
  hue = ++hue % 360;
  saturation = ++saturation % 50;
  saturation1 = ++saturation1 % 99;


  push();
      //translate(-200, -200);
      mouseDragged();
      //dialogue();
  pop();

  if (mar <= 200){
    push();
      drift();
    pop();
  }

  if (mar >= 400){
    mar = 0;
  }

  if (suop >= 200){
    translate(-200, 0);
    deriva();
  }

  if (suop >= 400){
    suop = 0;
  }

  if (hue >= 1200){
    hue = 0;
  }

  if (borrar >= 2000){
    splash = "";
    borrar = 0;
    ruidoX4 = 0;
    ruidoY4 = 0;
    ruidoC4 = 0;
  }


  if (borrar_all >= 4000){
    denuez();
}

function denuez() {
    location.reload();
}

}

function dialogue(splash) {
  var ruidoX4 = 0.000081;
  var posX4 = noise(millis() * ruidoX4) * windowWidth;
  var ruidoY4 = 0.000051;
  var posY4 = noise(millis() * ruidoY4) * windowHeight;  

  var ruidoC4 = 0.000021;
  var posC4 = noise(millis() * ruidoC4) * 80;   
  

  // stroke(0, 0, 0);
  //strokeWeight(3);
  noStroke();
  //  fill(0, 0, hue*4);
  // fill(313, hue%99, 99);
  fill(hue, 62, 99);

  textSize(fontsize = posC4);
  text(splash, posX4, posY4, 800, 250);

}

function mouseDragged() {
  
  var tamango = random (14);

  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x:splash
  }
  
  socket.emit('mouse', splash);

  var ruidoX4 = -0.000061;
  var posX4 = noise(millis() * ruidoX4) * windowWidth;
  var ruidoY4 = -0.0001;
  var posY4 = noise(millis() * ruidoY4) * windowHeight;  

  var ruidoC4 = 0.000021;
  var posC4 = noise(millis() * ruidoC4) * 100;   

  x = x + xspeed;
  y = y + yspeed;

  if ((x > windowWidth) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  if ((y > windowHeight) || (y < 0)) {
    yspeed = yspeed * -1;
  }
  //stroke(0, 100);
  //strokeWeight(3);
  //fill(hue, 0, 0);
  //fill(hue*2, 4000, 4000);
  fill(0, 0, saturation1);

  socket.emit('tecla', splash);

  textSize(fontsize = posC4);

  //for (var x = 100; x < windowWidth; x += 4000) {
	//translate(posX4, y);
  	text(splash, posX4, y, 300, 400);
	//}
}


function drift() {
  push();
  
  var tamango = 20;

  var ruidoX4 = 0.0002;
  var posX4 = noise(millis() * ruidoX4) * width;
  var ruidoY4 = 0.00009;
  var posY4 = noise(millis() * ruidoY4) * height;  

  var ruidoC4 = 0.0008;
  var posC4 = noise(millis() * ruidoC4) * 85;  


  noStroke();
  //stroke(0, 80);
  //stroke(0, 180);
  fill(40, saturation1, 99, 0.2);

  //fill(hue*2, 400, 400, random(255));
  rectMode(CENTER);
  //stroke(255, 200, 0);
  //fill(0, 0, 400, random(100, 255));
  //strokeWeight(1);

  translate(posX4, posY4);

  ellipse(100, 100, posC4, posC4);
pop();
}

function deriva() {
  push();
  
  var tamango = 20;

  var ruidoX4 = 0.0002;
  var posX4 = noise(millis() * ruidoX4) * windowWidth;
  var ruidoY4 = 0.00009;
  var posY4 = noise(millis() * ruidoY4) * windowHeight;  

  var ruidoC4 = 0.0008;
  var posC4 = noise(millis() * ruidoC4) * 90;  


  noStroke();
  //stroke(0, 80);
  //stroke(0, 180);
  fill(288, saturation, 84, 0.2);

  //fill(hue*2, 400, 400, random(255));
  rectMode(CENTER);
  //stroke(255, 200, 0);
  //fill(0, 0, 400, random(100, 255));
  //strokeWeight(1);

  translate(posX4, posY4);

  ellipse(100, 100, posC4, posC4);
pop();
}

function keyTyped() {
  splash += key;
//  splash1 += random(splash2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
