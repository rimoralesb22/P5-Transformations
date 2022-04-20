let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);


  push();
  translate(50, 50);
  rotate(angle);
  fill(255, 100, 50);
  rect(0, 0, 100, 50);
  pop();

  push();
  translate(300, 300);
  rotate(-angle * 2);
  fill(255, 50, 100);
  rect(0, 0, 100, 50);
  angle = angle + 5;
  pop();

}
