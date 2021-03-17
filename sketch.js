
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var boy,boyImage;
var mango,mangoImage;
var stone,stoneImage;
var tree,treeImage;
var ground;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground = createSprite(400,680,800,20)
	boy=createSprite(300,600,20,50);
	
	
	tree=createSprite(680,600,50,50)

	var options={
		isStatic:true
	  }

	  console.log();
	 
	  var packageSprite_options={
		restitution:1.0
		
  }

 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  boy.display();
  tree.display();
  
}



