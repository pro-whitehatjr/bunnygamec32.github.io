const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var bg_img;
var rabbit;

var bunny,button;
var bg_img,fruit_img,bunny_img;

function preload()
{
  bg_img = loadImage('assets/background.png');
  fruit_img = loadImage('assets/melon.png');
  bunny_img = loadImage('assets/Rabbit-01.png');
  
}

function setup() {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  button = createImg('assets/cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);
  fruit = Bodies.circle(300,300,20);

  bunny = createSprite(230,620,100,100);
  bunny.addImage(bunny_img);
  bunny.scale = 0.2;
  

  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,500,700);
  ground.show();
  rope.show();

  image(fruit_img,fruit.position.x,fruit.position.y,60,60);
  Engine.update(engine);

  drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

