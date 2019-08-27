//playing around with circles, ellipses, and squares
boolean squares = true;
int colored_shape_probability = 2;
int sample_count = 0;

void setup () {
  background(255);
  size(1000,1000);
}

void draw() {
  rectMode(CENTER);
  //very beginnings of modularization
  run();
}

void run() {
  int[] x_loc = {50, 150, 250, 350, 450, 550, 650, 750, 850, 950};
  int x,y,choose,sizeRand,alphaRand;
  if (keyPressed) {
    sample_count++;
    String filename = "sample" + sample_count + ".png";
    save(filename);
  }
  if (mousePressed){
    y = (int) random(1000);
    x = x_loc[(int) random(10)];
    choose = (int) random(100);
    sizeRand = (int) random(80) - 40;
    alphaRand = (int) random(256);
    if (choose < colored_shape_probability){
      //noFill();
      fill(127,255,127,alphaRand);
      //stroke(0,0,0,alphaRand);
      noStroke();
      ellipse(x,y,180 + sizeRand,240 + sizeRand);
    } else {
      if (x >= 250 && x <= 750 && y >= 250 && y <= 750) {
        //fill(127,0,0,alphaRand);
        noFill();
        stroke(127,0,0,alphaRand);
      } else {
        //fill(0,0,0,alphaRand);
        noFill();
        stroke(127,0,0,alphaRand);
      }
      if (squares == false) {
        ellipse(x,y,40 + sizeRand,40 + sizeRand);
      } else {
        for (int i=0; i<3; i++) {
          square((float) x,(float)y,(float)(40 + sizeRand));
          x += 20; y += 20;
        }
      }
    }
  }
}
