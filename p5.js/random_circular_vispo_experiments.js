var posneg = [-1, 1];
var c_r;
var c_g;
var c_b;
var c_gray;
var gray_clr;

function setup() {
  //pixelDensity(1);
  c_r = random(255);
  c_g = random(255);
  c_b = random(255);
  c_gray = random(127)+128;
  gray_clr = color(c_gray);
  angleMode(RADIANS);
  createCanvas(1000, 1000);
  background(gray_clr);
  translate(500, 500);
}

function draw() {
  
}

function mouseDragged() {
  //for (var i = 0; i < 100; ++i) {
    translate(width/2,height/2);
  for (var i = 0; i < 10; ++i) {
    rotate(random(2*PI));
    var new_r, new_g, new_b;
    new_r = random(c_r);
    new_g = random(c_g);
    new_b = random(c_b);
    print(new_r + ", " + new_g + ", " + new_b);
    var strk_clr = color(new_r,new_g,new_b);
    stroke(strk_clr);
    var angle = random(2*PI);
    var x = cos(angle)*180;
    var y = sin(angle)*180;
    var x_2 = random(cos(angle)*180)*random(posneg);
    var y_2 = random(sin(angle)*180)*random(posneg);
    //point(x,y);
    //point(x_2, y_2);
    line(x,y,x,y_2);
    line(x,y,x_2,y);
    line(x_2,y_2,x,y_2);
    line(x_2,y_2,x_2,y);
    line(random(200)*-1,180,random(200),180);
  }
  stroke(gray_clr);
  for (var j = 0; j < 10000; ++j) {
    var angle_point = random(2*PI);
    var x_point = random(cos(angle_point))*180;
    var y_point = random(sin(angle_point))*180;
    point(x_point,y_point);    
  }
  let d = pixelDensity();
  print(d + " " + width + " " + height);
  let wholeImage = 4 * (width * d) * (height * d);
  loadPixels();
  for (var m=0;m<10000;m++) {
    randomPixel=floor(random(width*d*height*d))*4;
    newRandomPixel=floor(random(width*d*height*d))*4;
    pixels[newRandomPixel]=pixels[randomPixel];
    pixels[newRandomPixel+1]=pixels[randomPixel+1];
    pixels[newRandomPixel+2]=pixels[randomPixel+2];
    //pixels[newRandomPixel+3]=pixels[randomPixel+3];
  }
  updatePixels();
}

function keyPressed() {
  let d = pixelDensity();
  print(d + " " + width + " " + height);
  let wholeImage = 4 * (width * d) * (height * d);
  loadPixels();
  for (var m=0;m<10000;m++) {
  randomPixel=floor(random(width*d*height*d))*4;
  newRandomPixel=floor(random(width*d*height*d))*4;
  pixels[newRandomPixel]=pixels[randomPixel];
  pixels[newRandomPixel+1]=pixels[randomPixel+1];
  pixels[newRandomPixel+2]=pixels[randomPixel+2];
  //pixels[newRandomPixel+3]=pixels[randomPixel+3];
  }
  updatePixels();
}