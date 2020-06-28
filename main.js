let cell=document.getElementsByClassName("grid_cell");
let score=document.getElementById("score");


function myFunction(){
    let key = Math.floor(Math.random()*16);
    if(cell[key].innerHTML == ""){
        cell[key].innerHTML = Math.random()<0.85? 2:4;
    }
}

function startGame(event){
    onKeyDown = event.keyCode;
    if(onKeyDown == 38 || onKeyDown == 87){
        randomNumber();
    }
    if(onKeyDown == 40 || onKeyDown == 83){
        randomNumber();
    }
    if(onKeyDown == 37 || onKeyDown == 65){
        randomNumber();
    }
    if(onKeyDown==39 || onKeyDown==68){
        randomNumber();
    }
}

function randomNumber(){
    let ramdomNum = Math.floor(Math.random() * 16);
    if(cell[ramdomNum].innerHTML===""){
        cell[ramdomNum].innerHTML=Math.random() < 0.85? 2:4;
        console.log("working");
    }
    else{
        randomNumber();
    }
}

document.addEventListener('keydown',startGame);
