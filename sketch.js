const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events=Matter.Events

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score=0;

function setup() {
  createCanvas(600,650);
  engine=Engine.create();
  world=engine.world
  /*ground1=new Ground(1,500,20,300);
  ground2=new Ground(599,500,20,300);
  ground3=new Ground(85,500,20,300);
  ground4=new Ground(170,500,20,300);
  ground5=new Ground(255,500,20,300);
  ground6=new Ground(340,500,20,300);
  ground7=new Ground(425,500,20,300);
  ground8=new Ground(510,500,20,300);*/
  ground9=new Ground(300,655,600,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

Engine.run(engine)
}

function draw() {
  background(0);
fill("red");
textSize(30);
text("Score: "+score,50,50);
if(score>=500){
  fill("red");
  textSize(30)
  text("GAME OVER",200,300);
}
  /*ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();*/
  
  if(frameCount%60===0){
     particles.push(new Particles(random(width/2-30, width/2+30), 10));
     score=score+10;
     } 
     for (var i = 0; i < plinkos.length; i++) { 
       plinkos[i].display(); 
      }
       for (var j = 0; j < particles.length; j++) { 
         particles[j].display(); 
        }
         for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   

    drawSprites();
}