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

const gameBoard = document.getElementById("game-board")

console.log(gameBoard);

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "ArrowUp" || key === "w") {
    console.log('up');
  }
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