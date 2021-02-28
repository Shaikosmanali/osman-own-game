

var score=0;
var obstacle, obstacle1Img, obstacle2Img,obstacleGroup;
var ground;
var player, playerImg;
var bg1, bg2, bgImage;

function preload() {
	playerImg = loadImage("images/12.gif");
	bgImage = loadImage("images/10.jpg");
	obstacle1Img = loadImage("images/44444.gif");
	obstacle2Img = loadImage("images/14.gif");


}

function setup() {
	createCanvas(1300, 700);




	//Create the Bodies Here.
	bg1 = createSprite(650, 350);
	bg1.addImage(bgImage);
	bg1.scale = 4;
	bg1.velocityX = -10;

	bg2 = createSprite(1940, 350);
	bg2.addImage(bgImage);
	bg2.scale = 4;
	bg2.velocityX = -10


	ground = createSprite(650, 650, 1400, 20);
	ground.visible=false


	player = createSprite(100, 200, 60, 60);
	player.addImage(playerImg);

	player.setCollider('circle', 0, 0, 70);
	

	obstacleGroup=new Group();






}


function draw() {
	background(2, 2, 2);

	if (keyDown("LEFT_ARROW")) {
		bg1.velocityX = -10
		bg2.velocityX = -10
		console.log("OSMAN");
	}

	if (bg1.x < -650) {
		bg1.x = 1920;
	}

	if (bg2.x < -650) {
		bg2.x = 1920;
	}

	if(keyDown("up_Arrow")&&player.y>500){
		player.velocityY=+-12;
	}
	player.velocityY=player.velocityY+0.5;
	player.collide(ground);

	if(obstacleGroup.isTouching(player)){
		obstacleGroup.destroyEach();
		score=score-10;
	}

	spawnObstacle();
	drawSprites();

	textSize(40);
	fill("darkBlue")
	text("score:"+score,1000,100);






}
function spawnObstacle() {
	if (frameCount % 100 === 0) {
		obstacle = createSprite(1500, 500, 30, 30);
		obstacle.velocityX = -10;
		var number = Math.round(random(1, 2));
		if (number === 1) {
			obstacle.addImage(obstacle1Img);
		} else {
			obstacle.addImage(obstacle2Img);
		}
		obstacleGroup.add(obstacle);
	}
}

