let checkWin = function() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (cell[main[i][j]].innerHTML == WIN_GAME_2048){
                swal({
                    title: "Good job!",
                    text: "You win",
                    icon: "success",
                    button: "Chơi lại",
                }).then(restartGame)
            }
        }
    }
}
