// Need a game loop, update function, draw function
// usually separation of concerns comes into play for snake, input
// lots of accessing the window
// x and y coodinates

/**
 * List of functions
 * - game loop
 * - draw funtion
 * - snake
 * - input direciton
 * - food
 * - game over
 * - points
 * -
 */

// basic game stuff

const gameBoard = document.getElementById("game-board");
const context = gameBoard.getContext("2d");

const unitSize = 25;

let running = false;

let score = 0;

console.log(score);

// console.log(gameBoard);

// game board
const gameBoardColour = "lightgrey";

// snake

const snakeColour = "purple";
let snakePosition = { x: 25, y: 25 };
let foodPosition = { x: 100, y: 100 }

function snake() {

  context.fillStyle = snakeColour;
  // first two are the x and y, second two are width and height
  context.fillRect(snakePosition.x, snakePosition.y, unitSize, unitSize);
}

// snake()

// food

//this works but needs to be multiples of 25 between 0 and 500
function foodPositionCalc() {
  let max = 20
  let min = 0
  let randomX = Math.floor(Math.random() * (max - min)) * 25 ;
  let randomY = Math.floor(Math.random() * (max - min)) * 25 ;
  // console.log(randomX, randomY);
  return [randomX, randomY]
}

console.log('food x', foodPosition.x, 'food y', foodPosition.y);


function drawFood(){
  context.fillStyle = "yellow";
  context.fillRect(foodPosition.x, foodPosition.y, unitSize, unitSize)
}

// controls
window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" || key === "w") {
    console.log("up");
    snakePosition.y = snakePosition.y - 25;
  }
  ``;
  if (key === "ArrowDown") {
    console.log("down");
    snakePosition.y = snakePosition.y + 25;
  }
  if (key === "ArrowLeft") {
    console.log("left");
    snakePosition.x = snakePosition.x - 25;
  }
  if (key === "ArrowRight") {
    console.log("right");
    snakePosition.x = snakePosition.x + 25;
  }
});

// game loop

function clear() {
  context.fillStyle = gameBoardColour;
  context.fillRect(0, 0, gameBoard.width, gameBoard.height);
}

function gameLoop() {
  running = true;
  
  updateGame();
}

function updateGame() {
  
  if (running) {
    if (snakePosition.x && snakePosition.y === foodPosition.x && foodPosition.y) {
      console.log('yumyum');
      let positions = foodPositionCalc()
      console.log(positions);
      foodPosition.x = positions[0]
      foodPosition.y = positions[1]
      console.log('food x', foodPosition.x, 'food y', foodPosition.y);
      score = score + 1
    }
    setTimeout(() => {
      clear();
      drawFood()
      snake()
      
      updateGame();
      console.log('snake x', snakePosition.x, 'food y', snakePosition.y);
      console.log('food x', foodPosition.x, 'food y', foodPosition.y);
      console.log('score', score);

    }, 100);
  }
  
}

gameLoop();


console.log("test");

