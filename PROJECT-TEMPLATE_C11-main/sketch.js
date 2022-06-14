var navio, navioImg, fundoImg;
function preload(){
navioImg=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
fundoImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  fundo=createSprite(200, 200);
  fundo.addImage(fundoImg);
  navio=createSprite(200, 200);
  navio.addAnimation(navio, navioImg);
  navio.scale=0.5;
}

function draw() {
  background("blue");
    drawSprites();

 
}
