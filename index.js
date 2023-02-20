//Sprite creation
//Click to create a new sprite with random speed
//example from:
//http://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite.js

let score = 0;
let puppy;

function preload(){
  waterImage = loadImage('images/Water.png');
  puppyImage = loadImage('images/puppy.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0)
  lava = createSprite(windowWidth/2, windowHeight - 100);
  lava.addImage(waterImage);  
  lava.scale *= 1.75;
  puppy = new Group();
  for (let i = 0; i < 30; i++) {
    let spr = createSprite(
      random(0, width), random(0),
      random(20, 50), random(20, 50));
    spr.addImage(puppyImage);
    spr.scale *= 0.15;
    spr.velocity.y = random(4);
    spr.onMouseOver = removeAndScore;
    puppy.add(spr);
  }
}


function draw() {
  background(157, 203, 227);
  drawSprites();
  puppy.overlap(lava, removeAndUnscore);
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < 15) {
    text(score, width/2, height/2);
  }
  else {
    text("You win!", width/2, height/2 - 200);
    text("Reload the page to play again", width/2, height/2 -100);
  }
  if (puppy.length == 0) {
    text("You lose!", width/2, height/2 -200);
    text("Reload the page to play again", width/2, height/2 -100);
  }
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Catch the puppies before they fall in the water! Save 15 to win!", width/2, height/2 -350);
}

function removeAndScore() {
  score += 1;
  this.remove();
}

function removeAndUnscore() {
  score -= 1;
  this.remove();
}