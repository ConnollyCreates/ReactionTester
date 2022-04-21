let box = document.getElementById("box");
let start = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let gameStatus = {
    STOP: 1,
    START: 2,
}

let statusGame = gameStatus.STOP;
var createdTime; var clickedTime; var reactionTime; var color;



function start_game() {
   statusGame = gameStatus.START;
    function myBox() {
        var x = Math.random() * 6000;
    x = Math.floor(x);
   timedOut = setTimeout(function() {
       
        box.style.background ="green";
        createdTime = Date.now();
    }, x)
    }
    myBox();
    box.addEventListener('click', function() {    
        clickedTime = Date.now();
         reactionTime = (clickedTime - createdTime)/1000;
         document.getElementById("timeCounter").innerHTML= + reactionTime + " seconds";
         this.style.background = "black";

        end_game();
       
    })
}

function end_game() {
clearTimeout(timedOut);
statusGame = gameStatus.STOP;
box.style.background = "black";

startBtn.innerHTML = "Start";
}

start.addEventListener('click', function() {
 
 if(statusGame == gameStatus.START) {
    end_game();
    box.addEventListener('click', function() {
        end_game();
    })  
    
 }  else {
     start_game();
     this.innerHTML = "Stop game";
 }


   
})




