let x;
let y;
let x_ans;
let y_ans;
let answer;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  stroke(255);
  noFill();
}

function mouseClicked() {
  stroke(random(255));
  for (var i=0; i<50; i++) {
    print(i);
    x = random(400);
    y = random(400);
    x_ans = pow((x-mouseX),2);
    y_ans = pow((y-mouseY),2);
    answer=sqrt(x_ans+y_ans);
    if ((answer)<=150) {
      print("x is " + x + ", y is " + y);
      print("x_ans is " + x_ans + ", y is " + y_ans);
      print("answer is " + answer);
      line(mouseX,mouseY,x,y);
    }
  }
  stroke(random(255),0,0);
  for (var j=0; j<10; j++) {
    ellipse(mouseX,mouseY,random(250));
  }
}