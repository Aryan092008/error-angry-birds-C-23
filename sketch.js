const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var object;
var b1,b2,b3,b4,b5;
var p1,p2;
var l1,l2,l3,l4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    b1= new box(700,320,70,70)
    b2= new box(920,320,70,70)
    b3= new box(700,240,70,70)
    b4= new box(920,240,70,70)
    b5= new box(810,160,70,70)
l1= new log(810,260,300,PI/2)
l2= new log(810,180,300,PI/2)
l3= new log(760,120,150,PI/7)
l4= new log(870,120,150,-PI/7)
p1= new pig(810,220)
p2= new pig(810,350)
ground= new Ground(600,380,1200,20)
bird= new birds(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
b1.display()   
b2.display()
b3.display()
b4.display()
b5.display()
l1.display()
l2.display()
l3.display()
l4.display()
p1.display()
p2.display()
ground.display()
bird.display()



}