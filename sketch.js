
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,680,1200,20);
	paper = new Paper(100,250);
	rect1 = new Dustbin(1050,665,200,15);
    rect2 = new Dustbin(940,622,20,100);
    rect3 = new Dustbin(1155,622,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("red");
  textSize(18);
  text("=> Press UP arrow to make ball move up",600,50);

  fill("red");
  textSize(18);
  text("=> Press DOWN arrow to make ball move down",600,75);

  fill("blue");
  textSize(22);
  text("'Make the ball get into the dustbin'",400,200)

  drawSprites();
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-5});

	}

}


