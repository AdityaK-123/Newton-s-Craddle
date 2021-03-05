
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,roof,rope1;



function setup() {
	createCanvas(830,640);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(420,200,250,20);

  bob1 = new Bob(160,200);
  bob2 = new Bob(183,200);
  bob3 = new Bob(206,200);
  bob4 = new Bob(229,200);
  bob5 = new Bob(252,200);
  
  rope1 = new Rope(bob1.body,roof.body,-100,0);
  rope2 = new Rope(bob2.body,roof.body,-50,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,+50,0);
  rope5 = new Rope(bob5.body,roof.body,+100,0);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  
 

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  
  
  fill("Darkblue")
  strokeWeight=(12);
  stroke('pink')
  textFont("Jokerman")
  textSize(30);
  text("Newton's craddle",300,50);
  
  textFont("cursive");
  fill("blue")
  textSize(34);
  text("______________",280,56);
  
  textFont("Gill sans MT");
  fill("red")
  textSize(20);
  text("Use 'Left' key to move the bob1",50,500);
  text("Use 'Up' key to move the bob2",50,530);
  text("Use 'Down' key to move the bob4",50,560);
  text("Use 'Right' key to move the bob5",50,590);
  
 
}

function keyPressed()   {
	if (keyCode===LEFT_ARROW) { 
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-900,y:900}); 
   
  }
  if (keyCode===UP_ARROW) { 
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-600,y:600}); 
   
  }
  if (keyCode===DOWN_ARROW) { 
    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:600,y:-600}); 
   
  }
  if (keyCode===RIGHT_ARROW) { 
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:600,y:-600}); 
   
  }
  
  }
  


  

