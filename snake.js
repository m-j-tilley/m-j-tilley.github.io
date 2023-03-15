const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

document.getElementById("game-board").appendChild(canvas);

const snake = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 40, y: 0 }
];

let food = { x: 200, y: 200 };

let dx = 20;
let dy = 0;

function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
  }
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * 20,
      y: Math.floor(Math.random() * 20) * 20
    };
  } else {
    snake.pop();
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clearCanvas();
  drawSnake();
  drawFood();
  moveSnake();
}

document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 37:
      dx = -20;
      dy = 0;
      break;
    case 38:
      dx = 0;
      dy = -20;
      break;
    case 39:
      dx = 20;
      dy = 0;
      break;
    case 40:
      dx = 0;
      dy = 20;
      break;
  }
});

setInterval(draw, 100);
