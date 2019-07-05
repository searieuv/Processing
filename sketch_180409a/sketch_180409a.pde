PImage img;
PImage img2;

void setup() {
  size(1000, 1000);
  img = loadImage("t.jpg");
  img2 = loadImage("u.jpg");
}

void draw() {
  background(img);
  img2.loadPixels();
  if (keyPressed == true) {
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
  delay(100);
}
