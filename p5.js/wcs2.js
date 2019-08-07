var topPoint;
var randPoint;
var selectSide;
var gr,r,b,g,r2,b2,g2;

function setup() {
createCanvas(1500, 1500);
}

function draw() {
  
}

function mouseDragged() {
  gr = floor(random(256));
  background(gr);
  r = floor(random(256));
  b = floor(random(256));
  g = floor(random(256));
  r2 = floor(random(256));
  b2 = floor(random(256));
  g2 = floor(random(256));
  for (var i=0; i<2000; i++) {
    topPoint = (floor(random(29))+1) * 50;
    randPoint = topPoint - 50 + random(100);
    selectSide = floor(random(2));
    if (selectSide == 0) {
      stroke(r,b,g);
      line(topPoint,0,randPoint,1500);
    } else {
      stroke(r2,b2,g2);
      line(topPoint,1500,randPoint,0);
    }
    stroke(gr);
    line(0,floor(random(1501)),1500,floor(random(1501)));
  }
  text('wecantstop',floor(random(1450)),floor(random(1500)));
  
}

function keyPressed() {
  save('out.png');
}