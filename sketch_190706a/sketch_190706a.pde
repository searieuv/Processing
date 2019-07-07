//playing around with circles

void setup () {
  background(255);
  size(1000,1000);
}

void draw() {
  int[] x_loc = {50, 150, 250, 350, 450, 550, 650, 750, 850, 950};
  int x,y,choose,sizeRand;
  if (mousePressed){
    y = (int) random(1000);
    x = x_loc[(int) random(10)];
    choose = (int) random(100);
    sizeRand = (int) random(80) - 40;
    if (choose < 95) {
      noFill();
      //stroke(100,0,0);
      ellipse(x,y,90 + sizeRand,90 + sizeRand);
    } else {
      if (x >= 250 && x <= 750 && y >= 250 && y <= 750) {
        fill(127,0,0);
      } else {
        fill(0);
      }
      ellipse(x,y,140 + sizeRand,149 + sizeRand);
    }
      
    
  }
  
}
