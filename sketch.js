
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,30,40);
    box2 = new Box(920,320,30,40);
    box3 = new Box(700,240,30,40);
    box4 = new Box(920,240,30,40);
    box5 = new Box(810,160,30,40);
    box6=new Box(360.240,30,40);
    box7= new Box(330,250,30,40);
    box8=new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);
    box13=new Box(360,195,30,40);
    box14=new Box(390,195,30,40);
    box15=new Box(420,195,30,40);
    box16=new Box(390,195,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
slingshot=new slingshot(polygon.body, {x:100,y:200});
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);


  

    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   Push()
    this.visibilty=this.visiblity-5
    if(box.speed<3){
        box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    tint(0,153,204)
}  
Pop()
    ground.display();



    

    
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.null();
}

function keyPressed(){
if(keyCode===32){
    slingshot.attach(this.polygon)
}

}