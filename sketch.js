var bullet
var wall
var speed
var weight

function setup() {
  createCanvas(1600,800);

  bullet=createSprite((400,400,50,50))
  bullet.shapecolour="green"
  bullet.velocityX=speed

 wall=createSprite(1400,400,60,height/2)
 wall.shapecolour=250

 speed=random(55,90)
 weight=random(400,1500)

}

function draw() {
  background("black"); 
  
if(wall.x-bullet.x<bullet.width/2+wall.width/2){
  car.shapecolour="red"
}
  drawSprites();
}