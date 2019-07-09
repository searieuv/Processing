//playing around with circles

void setup () {
  background(127);
  size(1000,1000);
}

void draw() {
  int[] x_loc = {50, 150, 250, 350, 450, 550, 650, 750, 850, 950};
  int x,y,choose,sizeRand,alphaRand;
  if (mousePressed){
    y = (int) random(1000);
    x = x_loc[(int) random(10)];
    choose = (int) random(100);
    sizeRand = (int) random(80) - 40;
    alphaRand = (int) random(256);
    if (choose < 95) {
      noFill();
      stroke(255,255,255,alphaRand);
      ellipse(x,y,90 + sizeRand,90 + sizeRand);
    } else {
      if (x >= 250 && x <= 750 && y >= 250 && y <= 750) {
        fill(127,0,0,alphaRand);
      } else {
        fill(0,0,0,alphaRand);
      }
      ellipse(x,y,40 + sizeRand,40 + sizeRand);
    }
      
    
  }
  
}
