const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var rope;
var ground;
var box1, box2, box3, box4, box5, box6;
var something;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    something = new Ground(300,30,15,15);
    ground = new Ground(600,height,1200,20);
    box1 = new Box(400,300,10,10);
    box2 = new Box(500,300,10,10);
    box3 = new Box(450,200,10,10);
    box4 = new Box(600,300,10,00);
    box5 = new Box(550,150,10,10);
    box6 = new Box(500,0,10,10);
    ball = new Superhero(250,300);
    rope = new Rope(ball.body, something.body, 0, 0);

}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    rope.display();
    ball.display();
    something.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}