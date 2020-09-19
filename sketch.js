
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5,roof;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(320,500);
	bob2= new Bob(360,500);
	bob3= new Bob(400,500);
	bob4= new Bob(440,500);
	bob5= new Bob(480,500);
    roof= new Ground(400,100,400,50);
    string1= new Rope(bob1.body,{x:320,y:100});
	string2= new Rope(bob2.body,{x:360,y:100});
	string3= new Rope(bob3.body,{x:400,y:100});
	string4= new Rope(bob4.body,{x:440,y:100});
	string5= new Rope(bob5.body,{x:480,y:100});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background("blue");
  fill("#C0C0C0");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}



