var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box,box1,box2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=createSprite(400,650,200,10)
	boxSprite.shapeColor="red"

	box1Sprite=createSprite(300,600,10,100)
	box1Sprite.shapeColor="red"

	box2Sprite=createSprite(500,600,10,100)
	box2Sprite.shapeColor="red"


	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width /2, 200 , 5,{isStatic:true} );
	World.add(world, packageBody);
 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER)
  background(0,0,0);
 
bounceoff(packageSprite,groundSprite)


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.velocityY=2

packageSprite.x=packageBody.position.x
packageSprite.y=packageBody.position.y


  }
}




