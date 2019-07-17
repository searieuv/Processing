let cwinc;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    noStroke();
  fill(0);
}

function mouseClicked() {
  for (var i = 0; i <= 300; i+=100) {
    fill(0);
    beginShape();
    vertex(i,0);
    vertex(i,400);
    vertex(i+100,400);
    vertex(i+100,0);
    endShape();
    fill(255);
    ellipse(i+50,0,100,mouseY*2,0);
  }
  
  for (var j = 0; j<=20;j++) {
    cwinc = new circleWithinCircle(random(200) - 100 + mouseX, random(200) - 100 + mouseY, random(100), random(255));
  }
  
  for (var k = 0; k<=200; k++) {
    stroke(200,200,200,random(255));
    var littleColumn = random(400);
    line(littleColumn,0,littleColumn-20,400);
    line(littleColumn,0,littleColumn+20,400);
  }
  noStroke();
}

class circleWithinCircle {
 // constructor(var x, var y, var w) {
  constructor(x, y, w, colorfill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.colorfill = colorfill;
    fill(this.colorfill);
    circle(this.x, this.y, this.w);
    fill(255 - this.colorfill,0,0);
    
    circle(this.x, this.y, this.w/2);
  }
    
    
}