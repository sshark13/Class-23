const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine,world;
var ball,ground;


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  
engine = Engine.create();
world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.10
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

  ball = Bodies.circle(200,50,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

