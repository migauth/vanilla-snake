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

const gameBoard = document.getElementById("game-board");
const context = gameBoard.getContext("2d");

context.fillStyle = 'purple'

const SQUARE_HEIGHT = 25
const SQUARE_WIDTH = 25

const CENTER = 225;


console.log(gameBoard);

// snake

const SNAKE_HEIGHT = 25;
const SNAKE_WIDTH = 25;

// first two are the x and y, second two are width and height
context.fillRect(CENTER, CENTER, SNAKE_WIDTH, SNAKE_HEIGHT);

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" || key === "w") {
    console.log('up');
  }``
  if (key === "ArrowDown") {
    console.log('down');
  }
  if (key === "ArrowLeft") {
    console.log('left');
  }
  if (key === "ArrowRight") {
    console.log('right');
  }
} )

function game() {

}

console.log('test');

// function inputDirection() {
//   addEventListener
// }