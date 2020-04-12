
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
   background(r,g,b);
   fill(r,g,b);
   ellipse(mouseX,mouseY,30,50);
   
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,1200,0,75);
  // change the value of Green based on the mouse movement about the X axis
   g = map(mouseX,0,1200,0,100);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,1200,5,25);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}