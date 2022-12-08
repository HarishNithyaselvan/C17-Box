var b1 
var b2
function setup() 
{
  createCanvas(400, 400);
  b1 = new Box(10,350,40,60,3,3)
  b2 = new Box(20,65,45,37,3,3)
}

function draw() 
{
  background(220);
  b1.show()
  b1.moveup()
  b2.show()
  b2.move()
}

