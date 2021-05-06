var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track=loadImage("images/Background.jpg");
  car1_img=loadImage("images/RocketShip1.png");
  car2_img=loadImage("images/RocketShip2.png");
  car3_img=loadImage("images/Rocket3.png");
  car4_img=loadImage("images/UFO.png");
  ground=loadImage("images/Background.jpg");

}
function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
