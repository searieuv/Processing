/*This sketch gradually subtracts randomly selected vertical and horizonal lines
from an image to reveal an image underneath. It also provides a method of saving
frames selected by the user.*/

//declaring two image objects

PImage img;
PImage img2;

//loading the images into the objects

void setup() {
  //images are expected to be 1000 x 1000 px
  size(1000, 1000);
  img = loadImage("u.jpg");
  img2 = loadImage("t.jpg");
}

void draw() {
  background(img);
  img2.loadPixels();
  //pressing the mouse activates the process of generating the images
  if (mousePressed) {
  //  for (int x=0; x<img2.width; x++) {
      int decide = (int) random(2);
      if (decide % 2 == 0) {
         float rand = random(img2.width);
         for (int y=0; y<img2.height; y++) {
           int loc = (int) rand + y*img2.width;
           img2.pixels[loc] = (int) alpha(0);
         }
      } else {
        float rand = random(img2.height);
         for (int x=0; x<img2.width; x++) {
           int loc = x + (int) rand*img2.height;
           img2.pixels[loc] = (int) alpha(0);
         }
      }
  }
  img2.updatePixels();
  image(img2,0,0);
  delay(10);
  
  //pressing a key will save an image called "combined_pics" with date/time info to keep the filename unique.
  if (keyPressed) {
    int d = day();    // Values from 1 - 31
    int mo = month();  // Values from 1 - 12
    int y = year();   // 2003, 2004, 2005, etc.
    int s = second();  // Values from 0 - 59
    int mi = minute();  // Values from 0 - 59
    int h = hour();    // Values from 0 - 23
    String save = "combined_pics." + String.valueOf(y) + String.valueOf(mo) + String.valueOf(d) + String.valueOf(h) + String.valueOf(mi) + String.valueOf(s) + ".png";
    saveFrame(save);
  }
}
