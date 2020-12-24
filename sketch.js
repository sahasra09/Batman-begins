
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var rain;
var rain=[];
var tillwhen=100;
var drops=[];
var ground;
function preload(){
    
}

function setup(){
    createCanvas(400,650);
  //  createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    
 //  ground=new Ground();

   
   if(frameCount%100===0){
   for(i=0;i<tillwhen;i++){
    drops.push(new Rain(random(200,300),-100))
   }
}
for(j=0;j<tillwhen;j++){
    rain.push(new Rainy(random(200,300),-100))
   }
}


function draw(){
    Engine.update(engine);
    background("black")
    if(frameCount%100===0){
        for(i=0;i<tillwhen;i++){
         drops.push(new Rain(random(200,300),-100))
        }
     }
     for(j=0;j<tillwhen;j++){
         rain.push(new Rainy(random(200,300),-100))
        }
    for(i=0;i<tillwhen;i++){
        drops[i].display();
        drops[i].positionup();
    }
    for(j=0;j<tillwhen;j++){
        rain[j].display();
        rain[j].positionup();
    }
    
    drawSprites();
    
}   

