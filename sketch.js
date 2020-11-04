var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
  foodGroup = createGroup();
  var survivalTime = 0;

}


function draw() {
  background(225);
  var survivalTime = 0;

  fill("white");
  text("Score" + score, 500, 50);
  stroke = ("black");
  textSize = (20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time:" + survivalTime, 100, 50);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 2;
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}

function food() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(400, 150, 20, 20);
    banana.addAnimation("banana", bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.08;
    banana.velocityX = -3;
    banana.lifetime = 150;
    foodGroup.add(banana);
  }
}

function obstacles() {
  if (World.frameCount % 300 === 0) {
    obstacle = createSprite(400, 306, 20, 20);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 150;

  }
}