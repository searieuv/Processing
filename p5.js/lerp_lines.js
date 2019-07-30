var x = 0;
var y = 0;
var x1, y1;
var lerper;
var count = 0;

function setup() {
  createCanvas(400, 400);
  //background(100,0,0);
}

function draw() {
  //background(220);
  //stroke(0);
}

function mousePressed() {
  for (var j = 0;j<1000;j++){
  if (count % 2 == 0) {
    stroke(127);
    for (var i = 0; i<15; i++) {
      x1 = random(100)-15 + x;
      y1 = random(100)-15 + y;
      line(x,y,x1,y1);
      lerper = random();
      x = lerp(x,x1,lerper);
      y = lerp(y,y1,lerper);
    } 
    x = 400;
  } else { 
    stroke(0,0,0);
    for (var i = 0; i<5; i++) {
      x1 = x - random(100)-15;
      y1 = random(180)-15 + y;
      line(x,y,x1,y1);
      lerper = random();
      x = lerp(x,x1,lerper);
      y = lerp(y,y1,lerper);
    } 
    x = 0;
  }
  y = 0;
  count = count + 1;
  }
}