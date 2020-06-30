let startGame = function(event){
    let move = new Move();
    onKeyDown = event.keyCode;
    if(onKeyDown === KEY_UP || onKeyDown === KEY_W){
        move.moveUp();
        audio1.play();
        randomNumber();
        designNumber();
        checkWin();
    }
    else if(onKeyDown === KEY_DOWN || onKeyDown === KEY_S){
        move.moveDown();
        audio1.play();
        randomNumber();
        designNumber();
        checkWin();
    }
    else if(onKeyDown === KEY_LEFT || onKeyDown === KEY_A){
        move.moveLeft();
        randomNumber();
        audio1.play();
        designNumber();
        checkWin();
    }
    else if(onKeyDown === KEY_RIGHT || onKeyDown === KEY_D){
        move.moveRight();
        audio1.play();
        randomNumber();
        designNumber();
        checkWin();
    }
}

let restartGame = function() {
    document.location.reload();
}

document.addEventListener('keydown',startGame);