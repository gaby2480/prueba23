const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroungImg, towerImg;


function preload() {
 //Agregando imágen del fondo del juego
  backgroungImg = loadImage("./assets/background.gif");
 //Agregar la imágen de la Torre
  towerImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //Creando el cuerpo base dandole propiedades físicas
  var options = {
    isStatic: true
  }

  //Creándolo y Agregándolo al mundo con el método rectangle()
  ground = Bodies.rectangle(0,height-1, width *2,1,options);
  World.add(world, ground);

  //Creando objeto Torre con Matter 
  tower = Bodies.rectangle(160,350,160,310, options);
  //Agregando el objeto Torre al mundo
  World.add(world, tower);
  
 
}

function draw() {
  //background(189);
 
  //Mostrando el fondo del juego usando el método image()
  image(backgroungImg,0,0,1200,600);

  Engine.update(engine);

  //Mostrando al cuerpo base con el método rect()
  rect(ground.position.x, ground.position.y, width*2,1);
  //Mostrando el objeto Torre
  //rect(tower.position.x, tower.position.y,160,310 );

  //push() y pop() para la imágen de la torre/posición
  push();
  rectMode(CENTER);
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160,310);
  pop();
   
}
