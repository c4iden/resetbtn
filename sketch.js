const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1,btn2,btn3;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ball=Bodies.circle(200,200,30);

  World.add(world,ball);

  btn1=createImg("right.png");
  btn1.position(350,200);
  btn1.size(40,40);
  btn1.mouseClicked(horizontalForce);
  
  btn2=createImg("up.png");
  btn2.position(350,240);
  btn2.size(40,40);
  btn2.mouseClicked(verticalForce);

  btn3=createImg("reset-button-icon-16.jpg");
  btn3.position(350,160);
  btn3.size(40,40);
  btn3.mouseClicked(resetbtn);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);


}

function horizontalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:0});
}
function verticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.2});
}
function resetbtn(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  console.log(ball.position.y);
}