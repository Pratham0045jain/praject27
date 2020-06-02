const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
     

  fixedPoint = new Rod(200,100,250,25);

  box = new Box(200,200,80);

  slingshot = new SlingShot(fixedPoint.body, box.body);
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  fixedPoint.display();
  box.display();
  slingshot.display();

}

/* function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
} */