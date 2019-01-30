var image1;
var bg;
var rSlider, gSlider, bSlider;
var x = 1;
var y = 1;
var r = 0;
var a = 0;
var z = 0;
var song;
var sliderVolume;
var sliderRate;
var capture;
var nums = [100, 25, 45, 72, 30, 90];

let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 50.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let bubbles = [];



function setup() {
    bg = loadImage("assets/background.png");
    image1 = loadImage("assets/lasers.JPG");

    background(bg);
    tint(255,0,125);
      song = loadSound('assets/music.mp3');
      for (let i = 0; i <20; i++){
        let x = random(1066);
        let y = random(800);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x ,y ,r);
      }
      

  createCanvas(1366, 800);
  capture = createCapture(VIDEO);
  capture.size(270, 270);
  {





 w= width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}




    // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(350, 140);
  gSlider = createSlider(0, 125, 255);
  gSlider.position(350, 180);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(350, 220);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position (20,20);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderRate.position (20,60);


}


function draw() {


rectMode(CORNER);

fill(0);

rect(0,0,1366,800);
image(bg, 0, 0);
 for (let i = 0; i < bubbles.length; i++){
        bubbles[i].move();
        bubbles[i].show();
      }
  {calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  stroke(255);
  strokeWeight(0.5);
  fill(255,50);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 1.4 + yvalues[x], 16, 16);
  }
}
for (var i = 0; i < 6; i++){
  stroke(255,10);
  strokeWeight(3);
  fill(random(237),34,93, 60);
  ellipse(1270, 70+i * 100, nums[i], nums[i]);
  
}

//N2 WEBCAM
noStroke();
if (mouseIsPressed){
   fill (63, 72, 204);
   rect(480,270,200,200);
   image(capture, 460, 250, 240, 240);
capture.hide();
fill(7,0,11);
 triangle(520, 500, 520, 350, 620, 500);
  triangle(630, 240, 630, 370, 550, 250); 

  }
  else {
image(capture, 480, 270, 200, 200);
capture.hide();
fill(7,0,11);
 triangle(520, 500, 520, 350, 620, 500);
  triangle(630, 240, 630, 370, 550, 250); 
}
fill(255);
text('click to play/pause and slide for volume', sliderVolume.x * 2 + sliderVolume.width, 35);
text('click to play/pause and slide for speed', sliderRate.x * 2 + sliderRate.width, 75);

function mousePressed() { getAudioContext().resume() }



  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill (r, g, b);
  
// I
  rect(390,270,43,200,10);

//N 3 DISCO
  fill( random(255), random(155), random(155), random(155)); 
  rect(960,280,180,180,10);
  rect(950,270,200,200,10);
  fill(11,0,13);
  triangle(990, 500, 990, 350, 1090, 500);
  triangle(1100, 270, 1100, 370, 1020, 250);




//muis
  stroke(7,0,11);
  strokeWeight(35);
  if (mouseIsPressed === false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
     
  }

  
  // N1 link
 noStroke()
  if (mouseX > 160 && mouseX < 200 && 
       mouseY > 270 && mouseY < 470) {
  fill(255);
  rect(160,270, 40, 200,0,0,10,10);}
   else {
  fill(102);
    rect(160,270, 40, 200,0,0,10,10);
  }

// schuin
  if (mouseIsPressed){
    fill(255);
  }
  else {
    fill(random(237),34,93);
  }
   quad(160, 270, 200, 270, 340, 468, 300, 470);
  

//N1 rechts
  fill(166,0, 83);
    if (keyIsPressed === true){
    fill(64,0,64);
  } else {
    fill(255);
  }




  // O rotate  
  rect(300,270,43,200,10,10,10,0);
if (keyIsPressed === true){
    fill(237,34,93);
  } else {
    fill(25);
  }
rectMode(CENTER);
  translate(width/1.675, height/2.18);
  rotate(a);
  rect(0, 0, 190, 190 ,50);
  a = a + 0.03
//kleine roze
fill(237,34,93);
 rotate(z);
  rect(0, 0, 80, 80,20);
  z = z + -0.05
}


{


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause();
 
  } else {
    song.play();
     song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());

  }
}
{  


}

  
}


 
 class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255,40);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}


