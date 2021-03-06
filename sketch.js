/* eslint-disable no-undef, no-unused-vars */
const color = {
  white: [255, 255, 255],
  cyan: [0, 255, 255],
  yellow: [255, 255, 0],
  mazenta: [255, 0, 255],
  orange: [255, 127, 0],
  blue: [0, 0, 255],
  green: [0, 255, 0],
  red: [255, 0, 0],
  gray: [100, 100, 100],
  black: [0, 0, 0]
};

const row = [];
for (let i = 0; i < 40; i++) {
  row[i] = 0;
}
const matrix = new Array(10);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = [...row];
}

const minoData = {
  I: [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1]
  ],
  O: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ],
  T: [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 1]
  ],
  L: [
    [0, 1],
    [1, 1],
    [2, 0],
    [2, 1]
  ],
  J: [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  S: [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0]
  ],
  Z: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1]
  ]
};

class Mino {
  constructor(x, y, rot) {}
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(color.white);
  if (mouseIsPressed) {
    fill(color.black);
  } else {
    fill(color.white);
  }
  ellipse(mouseX - windowWidth / 2, mouseY - windowHeight / 2, 80, 80);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  }
  if (keyCode === DOWN_ARROW) {
  }
  if (keyCode === LEFT_ARROW) {
  }
  if (keyCode === RIGHT_ARROW) {
  }
  if (keyCode === 32) {
  }
  return false;
}

windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
