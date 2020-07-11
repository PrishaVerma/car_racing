class Game{
    constructor(){

    }
   
    updateState(state){
        database.ref("/").update({
            gameState:state
        })

    }
    getState(){
        var gsRef= database.ref('gameState');
        gsRef.on('value',function(data){
            gameState= data.val();
        })
//console.log(gameState);
    }
    start(){
     //   if(gameState===0){
form=new Form();
form.display();
console.log("hi");

player=new Player();
player.getCount();

       // }
    }

}