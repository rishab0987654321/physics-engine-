var fixedrect , movingrect
var gameobject1 , gameobject2 , gameobject3 , gameobject4 


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(600,200,50,80)
  fixedrect.shapeColor = "yellow"
  fixedrect.debug = true

  movingrect = createSprite(600,200,80,50)
  movingrect.shapeColor = "yellow"
  movingrect.debug = true

  gameobject1 = createSprite(100,100,50,50)
  gameobject1.shapeColor = "green"

  gameobject2 = createSprite(200,100,50,50)
  gameobject2.shapeColor = "green"

  gameobject3 = createSprite(300,100,50,50)
  gameobject3.shapeColor = "green"

  gameobject4 = createSprite(400,100,50,50)
  gameobject4.shapeColor = "green"

  movingrect.velocityY = -5
  fixedrect.velocityY = +5


}

function draw() {
  background(0);  
  movingrect.y = World.mouseY
  movingrect.x = World.mouseX
  
  if(isTouching(movingrect, gameobject2)){
    movingrect.shapeColor = "blue"
    gameobject2.shapeColor = "blue"
  }
  else{
    movingrect.shapeColor = "green"
    gameobject2.shapeColor = "green"
  }
  bounceoff(movingrect,fixedrect);
  
  
  drawSprites();
}

