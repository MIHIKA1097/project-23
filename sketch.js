const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground;
var ball,box1;
var box2,ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  // var options={
  //   isStatic: true
  // }
  // var ball_options={
  //   restitution:0.5
  // }
  // ground=Bodies.rectangle(200,375,400,20,options);
  // World.add(world,ground);
  // console.log(ground.position.x,ground.position.y);
  // ball=Bodies.circle(200,100,20,ball_options);
  // World.add(world,ball);
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground=new Ground(200,390,400,20)
}

function draw() {
  background(0);
  Engine.update(engine);
//   rectMode(CENTER)
//   rect(ground.position.x,ground.position.y,400,20); 
// ellipseMode(CENTER)
// ellipse(ball.position.x,ball.position.y,40,40); 
//   drawSprites();
box1.display();
box2.display();
ground.display();
}