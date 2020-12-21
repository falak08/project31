const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(10,700,100,10);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();
}