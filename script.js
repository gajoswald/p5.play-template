// https://sashamaps.net/docs/resources/20-colors/
let colorlist = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']

let sprite
let floor 

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)

  world.gravity.y = 10
  
  sprite = new Sprite()
  sprite.diameter = 50
  sprite.color = random(colorlist)
  sprite.textSize = 30
  sprite.text = "p5"

  floor = new Sprite()
  floor.color = random(colorlist)
  floor.y = height-10;
  floor.w = width;
  floor.h = 5;
  floor.collider = 'k';
  floor.velocity.y = -1
}

function draw() {
  clear()  
  const theta = atan2(mouseY-sprite.y, mouseX-sprite.x)
  console.log( theta )
  sprite.rotation = theta

  if( floor.y < sprite.diameter ) { floor.y = height - 10 }
  if( floor.y > height - 10 ) { floor.y = height - 10 }
}