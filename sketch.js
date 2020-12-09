const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var Aish,Saxena;
function setup() {
  createCanvas(800,400);
  Aish=Engine.create();
  Saxena=Aish.world;
  var option={
    isStatic:true
  }
  Ritika=Bodies.rectangle(400,380,800,20,option);
  World.add(Saxena,Ritika);
  jyoti=new box(200,100,60,100);
  ojasvi=new box(250,200,50,70);
}

function draw() {
  background(0);  
  Engine.update(Aish)
 rectMode(CENTER);
   rect(Ritika.position.x,Ritika.position.y,800,20);
  jyoti.display();
  ojasvi.display();
}