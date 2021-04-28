var bullet
var wall
var speed
var weight

function setup() {
  createCanvas(800,400);
  bullet=createSprite(400, 200, 50, 50);
  bullet.shapecolour="green"
   bullet.velocityX=speed

 wall=createSprite(700,200,60,height/2)
 wall.shapecolour=250

 speed=random(55,90)
 weight=random(400,1500)

}

function draw() {
  background(black); 
  
if(wall.x-car.x<car.width/2+wall.width/2){
  car.shapecolour="red"
}
  drawSprites();
}