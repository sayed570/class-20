var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50)
  movingRect=createSprite(400,200,50,50)
  movingRect.shapeColer="red"
    fixedRect.shapeColer = "red"
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x -fixedRect.x < movingRect.width/2 +fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 +fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="green"
    fixedRect.shapeColor = "green"
  }else {
    movingRect.shapeColor="red"
    fixedRect.shapeColor = "red"
  }

  drawSprites();
}