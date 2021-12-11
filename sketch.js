const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var bgimg
var tower, cannon, ground,tower

function preload() {
bgimg=loadImage("/assets/background.gif")
tower=loadImage("/assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  toweroptions={
    isStatic:true
  }

  tower1 = Bodies.rectangle(50,250,160,310,toweroptions)
  World.add(world,tower1);
 ground = Bodies.rectangle(0,595,1200,10,toweroptions)
 World.add(world,ground)
}

function draw() {
  background(bgimg);
 
  Engine.update(engine);
  
   rect(ground.position.x,ground.position.y,1200,10)
   image(tower,tower1.position.x,tower1.position.y,160,310)
  
}
