function startGame(event){
    let move = new Move();
    onKeyDown = event.keyCode;
    if(onKeyDown === KEY_UP || onKeyDown === KEY_W){
        move.moveUp();
        randomNumber();
        designNumber();
        audio1.play();
        checkWin();
    }
    else if(onKeyDown === KEY_DOWN || onKeyDown === KEY_S){
        move.moveDown();
        randomNumber();
        designNumber();
        audio1.play();
        checkWin();
    }
    else if(onKeyDown === KEY_LEFT || onKeyDown === KEY_A){
        move.moveLeft();
        randomNumber();
        designNumber();
        audio1.play();
        checkWin();
    }
    else if(onKeyDown === KEY_RIGHT || onKeyDown === KEY_D){
        move.moveRight();
        randomNumber();
        designNumber();
        audio1.play();
        checkWin();
    }
}

function restartGame() {
    document.location.reload();
}

document.addEventListener('keydown',startGame);