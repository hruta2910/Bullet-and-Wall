var bullet;
var wall, thickness; 
var speed, weight;

function setup() {
 canvas = createCanvas(1600,400);

 speed = random(200,300);
 weight = random(30,50);
 thickness = random(22,83);
 
 bullet = createSprite(50, 200, 90, 10);
 bullet.velocityX = speed;
 bullet.shapeColor = "black";

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255); 
if(hasCollided(bullet, wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   if(damage > 10){
      wall.shapeColor = color(255,0,0);
   }
   if(damage < 10){
      wallshapeColor = color(0,255,0);
   }
}
  
  
  drawSprites();
}
function hasCollided(dbullet, dwall){
   bulletRightEdge = dbullet.x + dbullet.width;
   wallLeftEdge  = dwall.x;
   if(bulletRightEdge >= wallLeftEdge){
      return true
   }
      return false;
}