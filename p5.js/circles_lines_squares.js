function setup() {
  createCanvas(400, 400);
}

function draw() {
  var y;
  var x;
  background(random(127)+128);
  fill(random(255),random(127),0);
  for (x=-100; x<300; x++) {
    //y = (2*x*x + -2*x + 400-(random(100))-1000);
    y = (.012*x*x + random(150)+100)-400;
    circle(x, y, random(250));
  }
  if (random(100)>90) {
      noFill();
  } else {
    fill(0);
  }
  square(random(400),random(400),random(100));
  stroke(255,255,255,random(255));
  for (var i = 0; i<200; i++) {
    line(random(400),0,random(400),400);
  }
  stroke(0);
}