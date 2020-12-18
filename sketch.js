
var speed = 0;
var weight =0;
var deformation =0;
var co = "mangenta"
var thicknes = 0;
function preload(){
  bt = loadImage("image.png");
  sound1 = loadSound("sound.mp3");
  sound2 = loadSound("song1.mp3");
  shoot = loadImage("image2.jpg");
  g = loadImage("ground2.png");
  image1 = loadImage("roll no 21.png")
  image2 = loadImage("roll no 21.png")
  image3= loadImage("roll no 21.png")
  image4 = loadImage("roll no 21.png")
app = loadSound("souns.mp3")
}
function setup() {
  thickness= random(10,100);
  
  createCanvas(800,400);

 

ground = createSprite(400,330,800,10);
ground.addImage(g)
shooter = new bulle(-100,240,100,100,shoot)
bullet = new bulle(shooter.x + 70,255,30,30,bt);
  walls = createSprite(750,178,thickness,300);
  walls.shapeColor = rgb(30,300,300)
console.log("Press the z key to set the default position of the bullet");
console.log("Press the y key to make the bullet move")
console.log("Press the UP_ARROW to make the shooter move in front");
console.log("Press the DOWN_ARROW to make the shooter move in back");
}

function draw()   {
 
  speed = random(55,90)
  weight = random(10,1500);
if (keyDown("z")){

  bullet.x = shooter.x + 70;
  
}
if (keyDown(UP_ARROW)){
  bullet.x = shooter.x + 70;
  shooter.x = shooter.x+ 50
  if (shooter.x > 50){
    shooter.x = 100
  }
}
if (keyDown(DOWN_ARROW)){
  bullet.x = shooter.x + 70;
  shooter.x = shooter.x - 50
  if (shooter.x < -100){
    shooter.x = -100
  }
}
  background(255); 
  image(image3,310,0,400,160) 
  image(image4,0,0,400,160) 
  image(image1,310,100,400,160) 
  image(image2,0,100,400,160) 
fill("white")
noStroke();
    rect(0,230,800,100);

  shooter.see();
  

bullet.see();



  speed = random(55,90)
  weight = random(10,1500);
  if (keyDown("y")){
if (bullet.x > -100 && bullet.x < 175){
     sound1.play();
}

bullet.x = bullet.x + speed
 
  }
  
  
  if (walls.x - bullet.x <= (bullet.width+walls.width)/2){
    sound2.play();
    deformation = 0.5*weight*speed*speed/22500
    console.log(deformation);
bullet.x = shooter.x + 70;
   
if (deforms(10)){
  walls.shapeColor = rgb(100,300,100);
  app.play();
}
  
if (deformer(10)=== true){
  walls.shapeColor = rgb(500,200,100);
}

  }

  
  drawSprites();
}
function deformer(mavalue){
  if (deformation > mavalue){
 return true
  }
  return false;
}
function deforms(mavalue){
  if (deformation < mavalue){
 return true
  }
  return false;
}
