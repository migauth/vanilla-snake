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

// gmae board
const gameBoardColour = 'lightgrey'

// snake

const snakeColour = 'purple'

let snakePosition = { x: 25, y: 25 };

context.fillStyle = snakeColour;
// first two are the x and y, second two are width and height
context.fillRect(snakePosition.x, snakePosition.y, unitSize, unitSize);

// food

  //this works but needs to be multiples of 25 between 0 and 500
function createFood(max, min) {
  let randomX = Math.floor(Math.random() * (max - min) + min)
  let randomY = Math.floor(Math.random() * (max - min) + min)
  // console.log(randomX, randomY);
  context.fillStyle = "yellow";
  context.fillRect(randomX, randomY, unitSize, unitSize);
  
}


// controls
window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" || key === "w") {
    console.log("up");
    snakePosition.y = snakePosition.y - 25
  }
  ``;
  if (key === "ArrowDown") {
    console.log("down");
    snakePosition.y = snakePosition.y + 25
  }
  if (key === "ArrowLeft") {
    console.log("left");
    snakePosition.x = snakePosition.x - 25
  }
  if (key === "ArrowRight") {
    console.log("right");
    snakePosition.x = snakePosition.x + 25
  }
});

// game loop

function clear() {
  context.fillStyle = gameBoard
  context.fillRect(0, 0, gameBoard.width, gameBoard.height)
}

function gameLoop() {
  running = true;
}

gameLoop()

function updateGame() {
  if (running) {
    setTimeout (() =>  {
      clear()
      
      context.fillStyle = snakeColour;
      context.fillRect(snakePosition.x, snakePosition.y, unitSize, unitSize);
      context.fillStyle = gameBoardColour;
      // createFood(500, 0)
      // this works for moving the snake
      // snakePosition.x = snakePosition.x + 25
      console.log(snakePosition.x);
      updateGame()
  
    }, 100)
    
  }
}

updateGame()

console.log("test");
