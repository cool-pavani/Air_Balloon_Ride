var bg_img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  bg_img = loadImage('Assests/background.jpg');
}



function setup() {
  createCanvas(1300,600);
  bg_img.velocityX = 2;
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine);
  if(bg_img.x > 400)
  {
    bg_img.x = 300;
  }
  
}

