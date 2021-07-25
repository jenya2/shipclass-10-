function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  if(keyIsDown(RIGHT_ARROW)) {
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)) {
    background("purple");
  }
}