var issImage, bg, spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;
var iss,spaceCraft;
var hasDocked,text1;
function preload(){
issImage = loadImage("images/iss.png");
bg = loadImage("images/spacebg.jpg");
spaceCraft1Img = loadAnimation("images/spacecraft1.png");
spaceCraft2Img = loadAnimation("images/spacecraft2.png");
spaceCraft3Img = loadAnimation("images/spacecraft3.png");
spaceCraft4Img = loadAnimation("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400,150);
  iss.addImage(issImage);
  iss.scale = 0.8;
  
  spaceCraft = createSprite(Math.round(random(300,650)),300);
  spaceCraft.addAnimation("still",spaceCraft1Img);
  spaceCraft.addAnimation("left",spaceCraft4Img);
  spaceCraft.addAnimation("right",spaceCraft3Img);
  spaceCraft.addAnimation("up",spaceCraft2Img);
  spaceCraft.scale = 0.23;
  hasDocked = false;
}

function draw() {
  

  console.log(spaceCraft.x,spaceCraft.y)
  if(hasDocked==false){
    if (keyCode == 37){
      spaceCraft.changeAnimation("left",spaceCraft4Img);
      spaceCraft.x = spaceCraft.x-5;
      keyCode = 2;
    }
    if (keyCode == 39){
      spaceCraft.changeAnimation("right",spaceCraft3Img);
      spaceCraft.x = spaceCraft.x+5;
      keyCode = 2;
    }
    if (keyCode == 38){
      spaceCraft.changeAnimation("up",spaceCraft2Img);
      spaceCraft.y = spaceCraft.y-5;
      keyCode = 2;
    }
    if (keyCode == 40){
      spaceCraft.changeAnimation("still",spaceCraft1Img);
      spaceCraft.y = spaceCraft.y+5;
      keyCode = 2;
    }
     if(spaceCraft.x >341 && spaceCraft.x <348 && spaceCraft.y <264 && spaceCraft.y >258){
       hasDocked = true;}

  } 
   if (hasDocked ==true ){
     spaceCraft.x = 343;
     spaceCraft.y = 228;
     fill("yellow");
     textSize(20);
      text1 = text("DOCKED!! Mission Complete!",800,400);
      text1.depth +=10000;
      console.log("DOCKED!! Mission Complete!",800,400);
     spaceCraft.changeAnimation("still",spaceCraft1Img);
   }
   
   background(bg); 
  drawSprites();
}