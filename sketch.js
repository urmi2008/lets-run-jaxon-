var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png");
  boyImg1= loadAnimation("Runner-2.png" ); 
} 

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy1=createSprite(180,340,30,30); 
boy.scale=0.08;
boy1.scale=0.08;
boy.addAnimation("Runningjaxon", boyImg);
boy1.addAnimation("Runningjaxon", boyImg1);


boy.velocityX=5;
boy1.velocityX=5;
boy.velocityY=-5;
boy1.velocityY=-5; 

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible=true;
leftBoundary.invisible=true;
leftBoundary.visible=false; 

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;
  boy.y=World.mouseY;
  boy1.x=World.mouseX;
  boy1.y=World.mouseY;

  

  

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  boy1.collide(edges[3]);
  boy1.collide(leftBoundary);
  boy1.collide(rightBoundary);
  
  

  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  } 

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}
  
  drawSprites();
}
