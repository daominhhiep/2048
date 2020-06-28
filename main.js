let cell=document.getElementsByClassName("grid_cell");

let score=document.getElementById("score");

let main=[
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
];

function myFunction(){              //Khi vào game tạo sẵn 1 số ngẫu nhiên
    let key = Math.floor(Math.random() * 16);
    if(cell[key].innerHTML == ""){
        cell[key].innerHTML = Math.random() < 0.85 ? 2:4;
        designNumber();
    }
}

function startGame(event){
    onKeyDown = event.keyCode;
    if(onKeyDown == 38 || onKeyDown == 87){
        moveUp();
        randomNumber();
        designNumber();
    }
    if(onKeyDown == 40 || onKeyDown == 83){
        moveDown();
        randomNumber();
        designNumber();
    }
    if(onKeyDown == 37 || onKeyDown == 65){
        moveLeft();
        randomNumber();
        designNumber();
    }
    if(onKeyDown==39 || onKeyDown==68){
        moveRight();
        randomNumber();
        designNumber();
    }
}

function randomNumber(){
    let ramdomNum = Math.floor(Math.random() * 16);
    if(cell[ramdomNum].innerHTML === ""){                          // Nếu ô trống
        cell[ramdomNum].innerHTML = Math.random() < 0.85 ? 2:4;   //xuất hiện ngẫu nhiên số 2 hoặc 4 với tỷ lệ số 2 là 85%
        console.log("working");
    }
    else{
        randomNumber();
    }
}

function moveUp() {
    for (let j = 0; j < 4; j++) {
        for (let i = 1; i <4; i++) {
            if (cell[main[i][j]].innerHTML) {               // Nếu ô cell có giá trị
                let row = i;
                while(row > 0){
                    if (cell[main[row-1][j]].innerHTML == "") {             //Nếu ô phía trên ô cell là ô trống
                        cell[main[row-1][j]].innerHTML = cell[main[row][j]].innerHTML;  //Di chuyển giá trị ô cell lên ô trống
                        cell[main[row][j]].innerHTML = "";                  // Cho giá trị ô cell vừa lên thành trống
                        row--;
                    }
                    else if(cell[main[row-1][j]].innerHTML == cell[main[row][j]].innerHTML)   //Nếu ô phía trên ô cell có giá trị = với ô cell
                    {
                        cell[main[row-1][j]].innerHTML *= 2;            // Cho giá trị ô phía trên cell nhân 2 lên
                        cell[main[row][j]].innerHTML = "";              // Đưa giá trị ô cell về trống
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[row-1][j]].innerHTML);     // Cộng giá trị 2 ô vào score
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
}

function moveDown() {
    for (let j = 0; j < 4; j++) {
        for (let i=2; i >=0; i--) {
            if (cell[main[i][j]].innerHTML) {
                let row = i;
                while(row + 1 < 4){
                    if (cell[main[row+1][j]].innerHTML == "") {
                        cell[main[row+1][j]].innerHTML = cell[main[row][j]].innerHTML;
                        cell[main[row][j]].innerHTML = "";
                        row++;
                    }
                    else if(cell[main[row+1][j]].innerHTML == cell[main[row][j]].innerHTML)
                    {
                        cell[main[row+1][j]].innerHTML *= 2;
                        cell[main[row][j]].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[row+1][j]].innerHTML);
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
}

function moveLeft() {
    for (let i = 0; i < 4; i++) {
        for (let j=1; j <4; j++) {
            if (cell[main[i][j]].innerHTML) {
                let col = j;
                while(col-1 >= 0){
                    if (cell[main[i][col-1]].innerHTML == "") {
                        cell[main[i][col-1]].innerHTML = cell[main[i][col]].innerHTML;
                        cell[main[i][col]].innerHTML = "";
                        col--;
                    }
                    else if(cell[main[i][col]].innerHTML == cell[main[i][col-1]].innerHTML)
                    {
                        cell[main[i][col-1]].innerHTML *= 2;
                        cell[main[i][col]].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[i][col-1]].innerHTML);
                        break;
                    }
                    else break;
                }
            }
        }
    }
}
function moveRight() {
    for (let i = 0; i < 4; i++) {
        for (let j=2; j >=0; j--) {
            if (cell[main[i][j]].innerHTML) {
                let col = j;
                while(col+1 < 4){
                    if (cell[main[i][col+1]].innerHTML == "") {
                        cell[main[i][col+1]].innerHTML = cell[main[i][col]].innerHTML;
                        cell[main[i][col]].innerHTML = "";
                        col++;
                    }
                    else if(cell[main[i][col]].innerHTML == cell[main[i][col+1]].innerHTML)
                    {
                        cell[main[i][col+1]].innerHTML *= 2;
                        cell[main[i][col]].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[i][col+1]].innerHTML);
                        break;
                    }
                    else break;
                }
            }
        }
    }
}

document.addEventListener('keydown',startGame);
