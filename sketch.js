var sonic;
var mario;
var hare;
var trophy;
var track;
var obstaclesIMG;
var powercoinIMG;
var finishline;

function preload(){
sonic = loadAnimation("/Images/Sonic1,/Images/Sonic2,/Images/Sonic3,/Images/Sonic4,");
mario = loadAnimation("/Images/Mario1,/Images/Mario2,/Images/Mario3,/Images/Mario4,/Images/Mario5,/Images/Mario6,/Images/Mario7,/Images/Mario8,");
hare = loadAnimation("/Images/bunny1,./Images/bunny2,/Images/bunny3,/Images/bunny4,/Images/bunny5,/Images/bunny6");
finishline = loadImage("./Images/finishline.png");
track = loadImage("./Images/track.png");
powercoinIMG = loadImage("./Images/coin.png");
obstaclesIMG = loadImage("./Images/rock.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(track);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}