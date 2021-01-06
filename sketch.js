
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var labImage;

//function preload(){
//	labImage = loadImage("Capture.PNG");
//}

function setup() {
	createCanvas(1200,400);
	
	engine = Engine.create();
	world = engine.world;

	roof = new ground(610,75,400,35);
	ball1 = new ball(480,350,60);
	ball2 = new ball(540,350,60);
	ball3 = new ball(600,350,60);
	ball4 = new ball(660,350,60);
	ball5 = new ball(720,350,60);
	rope1 = new Rope(ball1.body,roof.body,-150,0);
	rope2 = new Rope(ball2.body,roof.body,-75,0);
	rope3 = new Rope(ball3.body,roof.body,0,0);
	rope4 = new Rope(ball4.body,roof.body,75,0);
  	rope5 = new Rope(ball5.body,roof.body,150,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("pink");
  
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  Engine.update(engine);
  
keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:-15});
	}
	
	if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:25,y:-15});
		}
		if(keyDown("space")){
			Matter.Body.applyForce(ball5.body,ball5.body.position,{x:25,y:-15});
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:-15});
			Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-25,y:-15});
			}
}

