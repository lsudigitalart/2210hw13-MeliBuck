// Melinda Buckner Copyright 2016
var r = 20; g = 0; b =50;
var num = 60;
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.1;
var rb = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;
var eis =0;
var ei =0;
var di = 0;
var angle = 0.0;
var angleDir = 1;
var speed = 0.005;
var actualTime;
var loadTime;
var once =1;
var mySound;
var pa = [];

//stars
var star1;
var star2;
var star3;
var star4;
var star5;
var star6;
var star7;
var star8;
var star9;
var star10;

//Smstars
var sstar1;
var sstar2;
var sstar3;
var sstar4;
var sstar5;
var sstar6;
var sstar7;
var sstar8;
var sstar9;
var sstar10;

var sstar11;
var sstar12;
var sstar13;
var sstar14;
var sstar15;
var sstar16;
var sstar17;
var sstar18;
var sstar19;
var sstar20;

function setup(){
  // frameRate(60)
  createCanvas(1000,700);
  background(r,g,b);
  smooth();
  pa[0] = new Particle(width/2, height/2);
  angleMode(DEGREES);
  mySound = loadSound('sound/07 Colours.mp3', playMusic)

  for (var i = 0; i < num; i ++){
    x[i] = 0;
    y[i] = 0;
  }

  //stars
  star1 = new JStars();
  star2 = new JStars();
  star3 = new JStars();
  star4 = new JStars();
  star5 = new JStars();
  star6 = new JStars();
  star7 = new JStars();
  star8 = new JStars();
  star9 = new JStars();
  star10 = new JStars();

  //smstars
  sstar1 = new SmJStars();
  sstar2 = new SmJStars();
  sstar3 = new SmJStars();
  sstar4 = new SmJStars();
  sstar5 = new SmJStars();
  sstar6 = new SmJStars();
  sstar7 = new SmJStars();
  sstar8 = new SmJStars();
  sstar9 = new SmJStars();
  sstar10 = new SmJStars();

  sstar11 = new SmJStars();
  sstar12 = new SmJStars();
  sstar13 = new SmJStars();
  sstar14 = new SmJStars();
  sstar15 = new SmJStars();
  sstar16 = new SmJStars();
  sstar17 = new SmJStars();
  sstar18 = new SmJStars();
  sstar19 = new SmJStars();
  sstar20 = new SmJStars();

}

function playMusic(){
  loadTime = millis();
  mySound.play();
}


function draw(){

  actualTime = millis() - loadTime;
  println(actualTime);


  fill(40,20,100)
  noStroke();
  rect(0,0,1000,700);

  // scene 1
  if(actualTime > 0 && actualTime < 16000){

  push();
  translate(500,400);
  fill(25, 230, 150, 150);
  noStroke();
  ellipse(-5, ei, 1000);
  ei = ei+0.15;
  pop();

  push();
  translate(500,400);
  fill(random(150,100), 230, random(200,100), 150);
  noStroke();
  ellipse(-5, ei, 600);
  ei = ei+0.15;
  pop();

  push();
  translate(500,400);
  fill(random(200,150), 250, 60, 200);
  noStroke();
  ellipse(-5, ei, 400);
  ei = ei+0.15;
  pop();

  push();
  translate(500,400);
  fill(random(255,200), 250, 30);
  noStroke();
  ellipse(-5, ei, 200);
  ei = ei+0.1;
  pop();

  push();
  translate(500,400);
  fill(255, random(230,250), 240);
  noStroke();
  ellipse(-5, ei, 100);
  ei = ei+0.05;
  pop();

  push();
  translate(0,400);
  fill(5,20,60);
  noStroke();
  rect(0,0,1100,400);
  pop();
  }


// scene 2

  if(actualTime > 16000 && actualTime < 28000){

    push();
    translate(0,400);
    fill(5,20,60);
    noStroke();
    rect(0,0,1100,400);
    pop();

    push();
    translate(0,0);
    rb=rb+50
    ty = 300;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();

    push();
    translate(0,0);
    rb=rb+50
    ty = 300;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();

    push();
    translate(50,50);
    rb=rb+50
    ty = 200;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();

    push();
    translate(10,70);
    rb=rb+50
    ty = 200;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();

    push();
    translate(1000,700);
    rb=rb+50
    ty = -200;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();

    push();
    translate(10,70);
    rb=rb+50
    ty = -200;
    if(bDir==1){
      t++;
    } else{
      t--;
    }
    translate(t,ty)
    fill(255);
    rotate(rb);
    rect(0,0,10,10);
    pop();
  }
// scene 3

if(actualTime > 28000 && actualTime < 32000){

  push();
  translate(0,400);
  fill(5,20,60);
  noStroke();
  rect(0,0,1100,400);
  pop();


    sstar1.move();
    sstar1.display();

}

// scene 3 addon

if(actualTime > 29000 && actualTime < 32000){

  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
}


if(actualTime > 30000 && actualTime < 32000){
  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
  sstar3.move();
  sstar3.display();
}


if(actualTime > 31000 && actualTime < 32000){

  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
  sstar3.move();
  sstar3.display();
  sstar4.move();
  sstar4.display();
}

// scene 4

if(actualTime > 32000 && actualTime < 45000){

  push();
  translate(0,400);
  fill(5,20,60);
  noStroke();
  rect(0,0,1100,400);
  pop();

  push();
  fill(255,255,200)
  ellipse(500,200,300,300)
  pop();

  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
  sstar3.move();
  sstar3.display();
  sstar4.move();
  sstar4.display();
  sstar5.move();
  sstar5.display();
  sstar6.move();
  sstar6.display();
  sstar7.move();
  sstar7.display();
  sstar8.move();
  sstar8.display();
  sstar9.move();
  sstar9.display();
  sstar10.move();
  sstar10.display();

}

// scene 5

if(actualTime > 45000 && actualTime < 52000){

  push();
  translate(0,400);
  fill(5,20,60);
  noStroke();
  rect(0,0,1100,400);
  pop();

  push();
  translate(-9000,400);
  fill(170,150,80);
  noStroke();
  rect(ry,0,-9000,400);
  ry = ry+3;
  pop();

  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
  sstar3.move();
  sstar3.display();
  sstar4.move();
  sstar4.display();
  sstar5.move();
  sstar5.display();
  sstar6.move();
  sstar6.display();
  sstar7.move();
  sstar7.display();
  sstar8.move();
  sstar8.display();
  sstar9.move();
  sstar9.display();
  sstar10.move();
  sstar10.display();


  push();
  translate(500,200)
  fill(255,255,200)
  ellipse(ei,-10,300)
  ei = ei+3;
  pop();

}

// scene 6

if(actualTime > 52000 && actualTime < 56000){

}

// scene 7

if(actualTime > 56000 && actualTime < 64000){

}

// scene 8

if(actualTime > 64000 && actualTime < 72000){

}

// scene 9

if(actualTime > 72000 && actualTime < 79000){

}

// scene 10

if(actualTime > 79000 && actualTime < 81000){

}

// scene 11

if(actualTime > 81000 && actualTime < 83000){

}

// scene 12

if(actualTime > 83000 && actualTime < 91000){

}

// scene 13

if(actualTime > 91000 && actualTime < 95000){

}

// scene 14

if(actualTime > 95000 && actualTime < 104000){

}

// scene 15

if(actualTime > 104000 && actualTime < 107000){

}

// scene 16

if(actualTime > 107000 && actualTime < 123000){

  push();
  for(var b =0; b<1500; b=b+5){


    println("the value y", b)
    fill(200,255,255);

    ellipse(b,0,30);
    fill(190,245,245);

    ellipse(b,20,32);
    fill(180,235,235);

    ellipse(b,50,35);
    fill(170,225,225);

    ellipse(b,80,39);
    fill(160,215,215);

    ellipse(b,120,44);
    fill(150,205,205);

    ellipse(b,160,50);
    fill(140,195,195);

    ellipse(b,190,57);
    fill(130,185,185);

    ellipse(b,230,65);
    fill(120,175,175);

    ellipse(b,260,74);
    fill(110,165,165);

    ellipse(b,290,80);
    fill(100,155,155);

    ellipse(b,320,91);
    fill(90,145,145);

    ellipse(b,350,103);
    fill(80,135,135);

    ellipse(b,380,116);
    fill(70,125,125);

    ellipse(b,410,130);
    fill(60,115,115);

    ellipse(b,440,145);
    fill(50,105,105);

    ellipse(b,470,161);
    fill(40,95,95);

    ellipse(b,550,178);
    fill(30,85,85);

    ellipse(b,600,196);
    fill(10,65,65);

    ellipse(b,640,215);
    fill(0,45,45);

    ellipse(b,670,235);
    fill(0,25,25);

    ellipse(b,700,246);
    fill(0,5,15);
  }
  pop();

  stroke(random(60,90), random(190,230), 160);

  push();
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }

  for(var n = 1; n < pa.length; n++){
    strokeWeight(random(5,20));
    line(pa[n].posX, pa[n].posY, pa[n-1].posX, pa[n-1].posY);
  }
}
pop();

}

// scene 17

if(actualTime > 123000 && actualTime < 130000){

}

// scene 18

if(actualTime > 130000 && actualTime < 139000){

}

// scene 19

if(actualTime > 139000 && actualTime < 155000){

}

// scene 20

if(actualTime > 155000 && actualTime < 160000){

}

// scene 21

if(actualTime > 160000 && actualTime < 166000){

}

// scene 22

if(actualTime > 166000 && actualTime < 172000){

}

// scene 23

if(actualTime > 172000 && actualTime < 178000){

}

// scene 24

if(actualTime > 178000 && actualTime < 183000){
background(r, g, b);

if(r >0){r-=0.1}
if(g >0){g-=0.1}
if(b >0){b-=0.1}

sstar1.move();
sstar1.display();
sstar2.move();
sstar2.display();
sstar3.move();
sstar3.display();
sstar4.move();
sstar4.display();
sstar5.move();
sstar5.display();
sstar6.move();
sstar6.display();
sstar7.move();
sstar7.display();
sstar8.move();
sstar8.display();
sstar9.move();
sstar9.display();
sstar10.move();
sstar10.display();

sstar11.move();
sstar11.display();
sstar12.move();
sstar12.display();
sstar13.move();
sstar13.display();
sstar14.move();
sstar14.display();
sstar15.move();
sstar15.display();
sstar16.move();
sstar16.display();
sstar17.move();
sstar17.display();
sstar18.move();
sstar18.display();
sstar19.move();
sstar19.display();
sstar20.move();
sstar20.display();
}

// scene 25

if(actualTime > 183000 && actualTime < 198000){
  background(0)

  noCursor();

  star1.move();
  star1.display();
  star2.move();
  star2.display();
  star3.move();
  star3.display();
  star4.move();
  star4.display();
  star5.move();
  star5.display();
  star6.move();
  star6.display();
  star7.move();
  star7.display();
  star8.move();
  star8.display();
  star9.move();
  star9.display();
  star10.move();
  star10.display();

  sstar1.move();
  sstar1.display();
  sstar2.move();
  sstar2.display();
  sstar3.move();
  sstar3.display();
  sstar4.move();
  sstar4.display();
  sstar5.move();
  sstar5.display();
  sstar6.move();
  sstar6.display();
  sstar7.move();
  sstar7.display();
  sstar8.move();
  sstar8.display();
  sstar9.move();
  sstar9.display();
  sstar10.move();
  sstar10.display();

  sstar11.move();
  sstar11.display();
  sstar12.move();
  sstar12.display();
  sstar13.move();
  sstar13.display();
  sstar14.move();
  sstar14.display();
  sstar15.move();
  sstar15.display();
  sstar16.move();
  sstar16.display();
  sstar17.move();
  sstar17.display();
  sstar18.move();
  sstar18.display();
  sstar19.move();
  sstar19.display();
  sstar20.move();
  sstar20.display();

  // push();
  // var targetX = mouseX;
  // x += (targetX - x) * easing;
  // var targetY = mouseY;
  // y += (targetY - y) * easing;
  // var weight = dist(x, y, px, py);
  // stroke(53, 250, 220, 200);
  // strokeWeight(weight+5);
  // line(x, y, px, py);
  // py = y;
  // px = x;
  // pop();

}

// scene 26

if(actualTime > 198000 && actualTime < 230000){

}

// scene 27

if(actualTime > 230000 && actualTime < 235000){

}

// scene 28

if(actualTime > 235000 && actualTime < 237000){

}

// scene 29

if(actualTime > 237000 && actualTime < 242000){

}

// scene 30

if(actualTime > 242000 && actualTime < 255000){

}


function JStars(){
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 20);
  this.speed = 2;
  this.fillColor = color(random(240,70), 255, random(220,255));
  noStroke();

  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  this.display = function(){
    fill(this.fillColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function SmJStars(){
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(2, 8);
  this.speed = 2;

  this.fillColor = color(random(240,70), 255, random (220,255));
  noStroke();

  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function(){
    fill(this.fillColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function mouseMoved(){
pa[pa.length] = new Particle(mouseX, mouseY, 255, 255, 255);
}

function mouseReleased(){
pa[pa.length] = new Particle(mouseX, mouseY);
}

function Particle(tempX, tempY, tempXx, tempYy, tempR, tempG, tempB){
  this.posX = tempX;
  this.posY = tempY;
  this.posXx = tempXx;
  this.posYy = tempYy;
  this.cR = random(240,70);
  this.cG = 255;
  this.cB = random (220,255);
  var particleSize = 20

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  this.vXx = random(-10, 10);
  this.vYy = random(-15, 15);

  this.move = function(){
    this.posX += this.vx
    this.posY += this.vy
    this.posXx += this.vXx
    this.posYy += this.vYy

    if(this.posY + 5>height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.vXx *= 0.75;
      this.vYy *= 0.5;
      this.posY = height - 4;
    }

    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }

  };

  this.display = function(){
    fill(this.cR, this.cG, this.cB);
    line(this.posX, this.posY, this.posXx, this.posYy, particleSize);
  };

}
