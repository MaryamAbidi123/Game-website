// let statements
let growing = true
let change = false
let clicking = true
let diameter = 130
let x, y;
let a, b;
let c, e;
let f, g;
let slide = 350
let otherSlide = 350
let glide = 100
let otherGlide = 100
let tide =250
let otherTide = 250
var score = 0;
const B_KEY = 66
let slate = 1

//load image
function preload() {
  Jungle = loadImage("Jungle.jpeg");
  Monkey = loadImage("Monkey.png")
  Snake = loadImage("Snake.png")
  Banana = loadImage("Banana.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20)
  textSize(100)
  rectMode(CENTER)
  noStroke()
imageMode(CENTER)
frameRate(80)
 

  x = random(width)
  y = random(height)
  a = random(width)
  b = random(height)
  c = random(width)
  e = random(height)
  f = random(width)
  g = random(height)


}

function draw(){
	
  startScreen();
// makes the screen
  createSnakes();
// Make Bananas
 makeBanana();
  //Print and change score
writeScore();
  
  
  
  //monkey image
  image(Monkey, mouseX, mouseY, 70, 70)

  // writing all the words 
  writeWords();
  


  
  //change size of snake
if (keyIsDown(B_KEY)){
    diameter = 200
  }
else{diameter = 130}

//changes colour of text
if (!growing){
slate = 256
}else
{slate = 1}
}




function mousePressed() {
  growing = !growing;
}



function doubleClicked(){
  clicking = !clicking
}

function startScreen() {
  
	background(200);
  image(Jungle, width/2, height/2, width, height)
  stroke(150, 200, 2)
line(0, 0, mouseX, mouseY)
  line(width, 0, mouseX, mouseY)

  //name
  stroke(5)
  textSize(15)
  fill(1)
  text("Maryam Abidi", width/12, height-20);
}

//instuctions
function writeWords(){
  if (clicking){ 
    textSize(25)
    textAlign(CENTER)
    text("Hovering over bananas will gain you points, and snakes will loose you points. Try pressing the 'b' key down for a harder obstacle. Your goal is to get 100 points. Double click to start", width/2, height/2, 400, 200);

  text("JUNGLE SURVIVAL", width/2, height/6)

  }
  else{
   textSize(20)
    text("Double click the screen to re-start. Click the screen to change the colour of the score & text", width/2, height - 30)
    fill(1)
  }
}
//Creation of Banana
function makeBanana(){

     if (!clicking){
       //banana 1
  image(Banana, slide, otherSlide, 100, 100)
  slide += 1
   otherSlide += random(-5,5)
  if (slide > width){
    slide = 0 
    otherSlide = random(2, height)
  }
       if(slide > width){
         otherSlide == random(height)
       }

      // banana 2
image(Banana, glide, otherGlide, 100, 100)
  glide += 1
   otherGlide += random(-5, 5)
  if (glide>width){
    glide = 0 
    otherGlide = random(2, height)
  }
    if (glide>width){
      otherGlide += random(-100, 100)
    }

       //banana 3
  image(Banana, tide, otherTide, 100, 100)
  tide += 1
  otherTide += random(-5, 5)
  if (tide>width){
    tide = 0 
  otherTide = random(2, height)
  }
 
  }
  if (tide>width){
      otherTide += random(-100, 100)
    } 
}

// score
function writeScore(){
    let d = dist(slide, otherSlide, mouseX, mouseY) 
  let d2 = dist(glide, otherGlide, mouseX, mouseY)
  let d3 = dist(tide, otherTide, mouseX, mouseY)
  let dil = dist(c, e, mouseX, mouseY)
  let dis = dist(a, b, mouseX, mouseY)
  let di = dist(x, y, mouseX, mouseY)
  let dilt = dist(f, g, mouseX, mouseY)

  if (!clicking){
    textSize(30)
    rect(width/2, 90, 70, 50)
  fill(slate)
  text (score, width/2, 100)

    //add points for bananas
  if (d<50){
    score = score+1
  }
text (score, width/2, 100)
  if (d2<50){
    score = score+1
  }
    text (score, width/2, 100)
    if (d3<50){
      score = score+1
    }

    //subtract points when running into snakes
  text(score, width/2, 100)
  if (dil<50){
    score = score-1
  }
    text(score, width/2, 100)
  if(dis<50){
    score = score-1
  }
  text(score, width/2, 100)
  if(di<50){
    score = score-1}

    text(score, width/2, 100)
  if(dilt<50){
    score = score-1}
}

    
else{score = 0}

  if (499 < score){
   
    text("YOU GOT 500 POINTS! YOU WIN", width/2, height/2,)
   
  }
}

function createSnakes(){
  // Draw a snake 1 if pressed
  if (!clicking){
  stroke(50);
  image(Snake, x, y, diameter, diameter);
    fill(23, 235, 236);
  x += random(-7, 7);
  y = y - 2;
  if (y < 0) {
    y = height; 
    x = random(2, width);
  }
let di = dist(x, y, mouseX, mouseY)
   
  if (di<50){
    background(1)
textSize(30)
    text("YOU GOT BIT BY A SNAKE!!", width/2, height/1.5, 300, 300)
    
  }
  
  
  //2nd snake
  
  image(Snake, a, b, diameter, diameter);
     
 a += random(-7, 7);
  b = b - 2;
  if (b < 0) {
    b = height; 
    a = random(2, width);
  }
let dis = dist(a, b, mouseX, mouseY)
  
  if (dis<50){
    background(1)
    textSize(30)
    text("YOU GOT BIT BY A SNAKE!!", width/2, height/1.5, 300, 300)
    
  }
//3rd snake
  image(Snake, c, e, diameter, diameter);
     
 c += random(-7, 7);
  e = e - 2;
  if (e < 0) {
    e = height; 
    c = random(2, width);
  }
let dil = dist(c, e, mouseX, mouseY)
  
  if (dil<50){
    background(1)
    textSize(30)
    text("YOU GOT BIT BY A SNAKE!!", width/2, height/1.5, 300, 300)
    
  }
  //forth snake
      image(Snake, f, g, diameter, diameter);
     
 f += random(-7, 7);
  g = g - 2;
  if (g < 0) {
    g = height; 
    f = random(2, width);
  }
let dilt = dist(f, g, mouseX, mouseY)
  
  if (dilt<50){
    background(1)
    textSize(30)
    text("YOU GOT BIT BY A SNAKE!!", width/2, height/1.5, 300, 300)
    
  }
  }
  rect(mouseX, mouseY, 1)
         }


