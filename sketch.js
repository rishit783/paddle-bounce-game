var ball,img,paddle;
var paddle_image,ball_image;
var topEdge;

function preload() {
  paddle_image = loadImage("paddle.png");
  ball_image = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
  
  paddle = createSprite(380,200,10,10)
  paddle.addImage(paddle_image);
  
  ball = createSprite(200,200,10,10); 
  ball.addImage(ball_image);
  ball.velocityY = 5;
  ball.velocityX = random(1,3); 
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  console.log(edges);
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  
  if(ball.bounceOff(paddle)){
      randomVelocity();
  }
  drawSprites();
  
}

function randomVelocity(){
ball.velocityY = random();
}

