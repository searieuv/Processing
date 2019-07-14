let value = 0;

function setup() {
  createCanvas(400, 400);
  background(0,100,0);
}

function draw() {
  
  stroke(random(255),0,0,random(255));
  //line(0,0,400,400);

  if (keyIsPressed == true) {
  strokeWeight(random(9) + 1);
  beginShape();
  //vertex(random(400), random(100) + 200);
  vertex(random(400), random(400));
  //vertex(random(100) + 200, random(100) + 200);
  vertex(random(400), random(100) + 200);
  vertex(random(400), random(100) + 200);
  vertex(random(100) + 200, random(100) + 200);
  //vertex(random(100) + 200, random(100) + 200);
  vertex(mouseX,mouseY);
  //vertex(random(100) + 200, random(100) + 200);
  vertex(200,200);
  endShape(CLOSE);
  fill(value,value,value,random(255));
  rect(25, 25, 50, 50);
  //text('wecantstop',random(400),random(400));
  }
}

function mouseClicked() {
  let ellloc = random(400);
  ellipse(ellloc,ellloc,100);
  if (value == 0) {
    value = 127;
  } else {
    value = 0;
  }
}
