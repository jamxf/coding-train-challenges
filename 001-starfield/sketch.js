let stars = [];
let speed;

function setup() {
  createCanvas(1024, 640);
  for (let i = 0; i < 15000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 10);
  background(0);

  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
