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

const GAMEBOARD = document.getElementById("game-board");
const CONTEXT = GAMEBOARD.getContext("2d");

const UNIT_SIZE = 25;

console.log(GAMEBOARD);

// snake

let snakePosition = { x: 25, y: 25 };

CONTEXT.fillStyle = "purple";
// first two are the x and y, second two are width and height
CONTEXT.fillRect(snakePosition.x, snakePosition.y, UNIT_SIZE, UNIT_SIZE);

// food

  //this works but needs to be multiples of 25 between 0 and 500
function createFood(max, min) {
  let randomX = Math.floor(Math.random() * (max - min) + min)
  let randomY = Math.floor(Math.random() * (max - min) + min)
  console.log(randomX);
  CONTEXT.fillStyle = "yellow";
  CONTEXT.fillRect(randomX, randomY, UNIT_SIZE, UNIT_SIZE);
  
}

createFood(500, 0)

// controls
window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" || key === "w") {
    console.log("up");
  }
  ``;
  if (key === "ArrowDown") {
    console.log(snakePosition.x);
  }
  if (key === "ArrowLeft") {
    console.log("left");
  }
  if (key === "ArrowRight") {
    console.log("right");
  }
});

// game loop

function game() {}

console.log("test");
