
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,stringrope1,stringrope2;
var world;
var bob1;

function setup(){
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
	bob1 = new Bobball(400,400,25)
	stringrope1 = new Stringrope(bob1.ballbody,{x:400,y:100});
//	bob2 = new Bobball(400+50,400,25)
//	stringrope2 = new Stringrope(bob2.ballbody,{x:400+50,y:100});
	
	Engine.run(engine);
}
function draw(){
	background(16, 8, 81);

	stringrope1.display();
	bob1.display();
//	stringrope2.display();
//	bob2.display();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	  Matter.Body.applyForce(bob1.ballbody,bob1.ballbody.position,{x:-85,y:-85});

	}
}



























































/*
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	console.log(-bobDiameter*2);
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  console.log(mouseX);
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});

  	}
}

*/