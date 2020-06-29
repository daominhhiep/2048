const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_A = 65;
const KEY_D = 68;
const KEY_S = 83;
const KEY_W = 87;
let cell = document.getElementsByClassName("grid_cell");
let score = document.getElementById("score");
let main = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
    ];



function myFunction(){              //Khi vào game tạo sẵn 1 số ngẫu nhiên
    let key = Math.floor(Math.random() * 16); //Random 1 trong 16 ô
    if(cell[key].innerHTML === ""){
        cell[key].innerHTML = Math.random()<1 ? 2 : 4;
        designNumber();
    }
}

function randomNumber(){
    let ramdomNum = Math.floor(Math.random() * 16);
    if(cell[ramdomNum].innerHTML === ""){                          // Nếu ô trống
        cell[ramdomNum].innerHTML = Math.random() < 0.95 ? 2:4;   //xuất hiện ngẫu nhiên số 2 hoặc 4 với tỷ lệ số 2 là 95%
    }
    else{
        randomNumber();
    }
}


function startGame(event){
    let move = new Move();
    onKeyDown = event.keyCode;
    if(onKeyDown === KEY_UP || onKeyDown === KEY_W){
        move.moveUp();
        randomNumber();
        designNumber();
    }
    else if(onKeyDown === KEY_DOWN || onKeyDown === KEY_S){
        move.moveDown();
        randomNumber();
        designNumber();
    }
    else if(onKeyDown === KEY_LEFT || onKeyDown === KEY_A){
        move.moveLeft();
        randomNumber();
        designNumber();
    }
    else if(onKeyDown === KEY_RIGHT || onKeyDown === KEY_D){
        move.moveRight();
        randomNumber();
        designNumber();
    }
}

document.addEventListener('keydown',startGame);
