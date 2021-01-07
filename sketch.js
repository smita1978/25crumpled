
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1,gr,dl,dr,db;
var pox=500;
var poy=590;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gr=new Ground();
	
	p1=new Paper(70,645,30);
	p1.scale=0.24;
	dl=new Dustbin(500,660,200,220);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  gr.display();
  p1.display();
  dl.display();
  

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:100,y:-155});
	}
}

