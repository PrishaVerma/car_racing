var database,playerCount,gameState;
var player,form,game;



function setup(){
  database = firebase.database();
 // console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  console.log(gameState);
  game.start();

  
}

function draw(){
  background("white");
  
    
  
}

