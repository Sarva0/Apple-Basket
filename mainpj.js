//Score
let score = 0;

//Basket movement
let basketX = 250;
let basketY = 445;

//Fruit array
let fruitsArray = [];

//Images
let apple, basket;

let fruitBottom, basketTop;

function preload() {
  apple = loadImage(
    "https://cdn.glitch.global/6187078a-aa0e-443c-8b01-2be40d57497c/apple.jpg?v=1689967592938"
  );
  basket = loadImage(
    "https://cdn.glitch.global/6187078a-aa0e-443c-8b01-2be40d57497c/basket.jpg?v=1689966766576"
  );
}

function setup() {
  createCanvas(500, 500);
  background(0);

  //Adding number of fruits
  for (let i = 0; i < 100; i++) {
    let temp = new Fruit(random(0, 500), random(0, 500), 5);
    fruitsArray.push(temp);
  }
}

function draw() {
  background(0);

  //Score counter
  fill(255);
  textSize(30);
  text("Score: " + score, 15, 35);

  //Basket
  fill(255, 255, 0);
  rect(basketX, basketY, 50, 50);

  //basket movements
  if (keyIsDown(LEFT_ARROW)) {
    basketX -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    basketX += 3;
  }

  // Generating fruits
  for (let i = 0; i < fruitsArray.length; i++) {
    fill(255, 0, 0);
    image(apple, fruitsArray[i].xPos, fruitsArray[i].yPos, 50, 50);
    fruitsArray[i].yPos += fruitsArray[i].speedValue;
  }
  // Collision
  basketTop = basketY + 25;
  fruitBottom = fruitsArray.yPos - 25;
  if (basketTop >= fruitBottom) {
    score += 1;
  } else {
  }
}

//Fruits constructor
class Fruit {
  constructor(x, y, speed) {
    this.xPos = x;
    this.yPos = y;
    this.speedValue = speed;
  }
}
