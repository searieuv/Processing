function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(random(55)+200);
  for (var i = 0; i<10000; i++) {
    point(random(400),random(400));
  }
  //background(255);
    if (random(2)>=1) {
      stroke(127,random(255),random(255));
    for (var j=0;j<100;j++) {
      strokeWeight(random(4));
      line(random(400),0,random(400),400);
    }
  } else {
    for (var k=0;k<100;k++) {
    var temp=random(400);
    stroke(255);
    strokeWeight(random(4));
    line(0,temp,400,temp);
    }
  }
}

function mouseDragged() {
  if (random(2)>=1) {
    for (var j=0;j<100;j++) {
      stroke(127,0,0); strokeWeight(random(4));
      line(random(400),0,random(400),400);
    }
  } else {
    for (var k=0;k<100;k++) {
    var temp=random(400);
    stroke(0);
    strokeWeight(random(4));
    line(0,temp,400,temp);
    }
  }
}