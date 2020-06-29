let Move = function () {
    this.moveUp = function () {
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i < 4; i++) {
                if (cell[main[i][j]].innerHTML) {                                              // Nếu ô cell có giá trị
                    let row = i;
                    while (row > 0) {
                        if (cell[main[row - 1][j]].innerHTML == "") {                          //Nếu ô phía trên ô cell là ô trống
                            cell[main[row - 1][j]].innerHTML = cell[main[row][j]].innerHTML;  //Di chuyển giá trị ô cell lên ô trống
                            cell[main[row][j]].innerHTML = "";                                      // Cho giá trị ô cell vừa lên thành trống
                            row--;
                        } else if (cell[main[row - 1][j]].innerHTML == cell[main[row][j]].innerHTML)   //Nếu ô phía trên ô cell có giá trị = với ô cell
                        {
                            cell[main[row - 1][j]].innerHTML *= 2;                                   // Cho giá trị ô phía trên cell nhân 2 lên
                            cell[main[row][j]].innerHTML = "";                                      // Đưa giá trị ô cell về trống
                            score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[row - 1][j]].innerHTML);     // Cộng giá trị 2 ô vào score
                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }
    this.moveDown = function () {
        for (let j = 0; j < 4; j++) {
            for (let i = 2; i >= 0; i--) {
                if (cell[main[i][j]].innerHTML) {
                    let row = i;
                    while (row + 1 < 4) {
                        if (cell[main[row + 1][j]].innerHTML == "") {
                            cell[main[row + 1][j]].innerHTML = cell[main[row][j]].innerHTML;
                            cell[main[row][j]].innerHTML = "";
                            row++;
                        } else if (cell[main[row + 1][j]].innerHTML == cell[main[row][j]].innerHTML) {
                            cell[main[row + 1][j]].innerHTML *= 2;
                            cell[main[row][j]].innerHTML = "";
                            score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[row + 1][j]].innerHTML);
                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }

    this.moveLeft = function () {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (cell[main[i][j]].innerHTML) {
                    let col = j;
                    while (col - 1 >= 0) {
                        if (cell[main[i][col - 1]].innerHTML == "") {
                            cell[main[i][col - 1]].innerHTML = cell[main[i][col]].innerHTML;
                            cell[main[i][col]].innerHTML = "";
                            col--;
                        } else if (cell[main[i][col]].innerHTML == cell[main[i][col - 1]].innerHTML) {
                            cell[main[i][col - 1]].innerHTML *= 2;
                            cell[main[i][col]].innerHTML = "";
                            score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[i][col - 1]].innerHTML);
                            break;
                        } else break;
                    }
                }
            }
        }
    }
    this.moveRight = function () {
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j >= 0; j--) {
                if (cell[main[i][j]].innerHTML) {
                    let col = j;
                    while (col + 1 < 4) {
                        if (cell[main[i][col + 1]].innerHTML == "") {
                            cell[main[i][col + 1]].innerHTML = cell[main[i][col]].innerHTML;
                            cell[main[i][col]].innerHTML = "";
                            col++;
                        } else if (cell[main[i][col]].innerHTML == cell[main[i][col + 1]].innerHTML) {
                            cell[main[i][col + 1]].innerHTML *= 2;
                            cell[main[i][col]].innerHTML = "";
                            score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[i][col + 1]].innerHTML);
                            break;
                        } else break;
                    }
                }
            }
        }
    }
}