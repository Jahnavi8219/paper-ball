
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball,engine,world,ground,leftside,rightside
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(400,10,12,ball_options)
	World.add(world,ball)
	//Create the Bodies Here.
ground=new Ground(400,400,800,20)
leftside=new Ground(600,370,20,120)
	Engine.run(engine);
rightside=new Ground(700,370,20,120)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipseMode (RADIUS)
  ellipse (ball.position.x,ball.position.y,12,12)
	ground.display()
	leftside.display()
	rightside.display()
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:7,y:-26})
	}
}


