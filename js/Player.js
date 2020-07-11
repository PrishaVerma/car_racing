class Player {
    constructor(){

    }
    getCount(){
        var pcRef= database.ref('playerCount');
        pcRef.on('value',function(data){
            playerCount= data.val();
        })

    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })

    }

    update(name){
var playerRef="player"+ playerCount
database.ref(playerRef).set(
    {
        name: name
    }
)
    }
    
}