let cell=document.getElementsByClassName("grid_cell");

let score=document.getElementById("score");

let main=[
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
];

function myFunction(){
    let key = Math.floor(Math.random()*16);
    if(cell[key].innerHTML == ""){
        cell[key].innerHTML = Math.random()<0.85? 2:4;
        designNumber();
    }
}

function startGame(event){
    onKeyDown = event.keyCode;
    if(onKeyDown == 38 || onKeyDown == 87){
        moveUp();
        randomNumber();

    }
    if(onKeyDown == 40 || onKeyDown == 83){
        moveDown();
        randomNumber();

    }
    if(onKeyDown == 37 || onKeyDown == 65){
        moveLeft();
        randomNumber();

    }
    if(onKeyDown==39 || onKeyDown==68){
        moveRight();
        randomNumber();

    }
}

function randomNumber(){
    let ramdomNum = Math.floor(Math.random()*16);
    if(cell[ramdomNum].innerHTML===""){
        cell[ramdomNum].innerHTML=Math.random()<0.85? 2:4;
        console.log("working");
    }
    else{
        randomNumber();
    }
}

function moveUp() {
    for (let j = 0; j < 4; j++) {
        for (let i = 1; i <4; i++) {
            if (cell[main[i][j]].innerHTML) {
                let row = i;
                while(row > 0){
                    if (cell[main[row-1][j]].innerHTML == "") {
                        cell[main[row-1][j]].innerHTML = cell[main[row][j]].innerHTML;
                        cell[main[row][j]].innerHTML = "";
                        row--;
                    }
                    else if(cell[main[row-1][j]].innerHTML == cell[main[row][j]].innerHTML)
                    {
                        cell[main[row-1][j]].innerHTML *= 2;
                        cell[main[row][j]].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(cell[main[row-1][j]].innerHTML);
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


document.addEventListener('keydown',startGame);
