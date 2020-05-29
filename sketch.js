const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rain1;
var engine,world;
var rain =[]
function setup() {
  var canvas =createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


}

function draw(){

  background(0); 
  Engine.update(engine);

  for (var i = 0;i<100;i++) {
    rain1=new Rain(Math.round(random(1,1600)),Math.round(random(1,400)))
    rain1.fall();
    rain1.display();
   }
  
  drawSprites();
}