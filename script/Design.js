let audio1 = new Audio('audio/audio.mp3');
let audio2 = new Audio('audio/background_audio.mp3')
let audio3 = new Audio('audio/background_audio2.mp3')

function designNumber(){                //gán màu cho các ô trống và ô số
    for (let i = 0; i < cell.length; i++) {
        if(cell[i].innerHTML==="") {
            cell[i].style.backgroundColor="#cdc1b4";
        }
        else if(cell[i].innerHTML==="2") {
            cell[i].style.color="#776e65";
            cell[i].style.backgroundColor="#eee4da";
        }
        else if(cell[i].innerHTML==="4") {
            cell[i].style.color="#776e65";
            cell[i].style.backgroundColor="#ede0c8";
        }
        else if(cell[i].innerHTML==="8") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="orange";
        }
        else if(cell[i].innerHTML==="16") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#fc5e2e";
        }
        else if(cell[i].innerHTML==="32") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#f67c5f";
        }
        else if(cell[i].innerHTML==="64") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#f65e3b";
        }
        else if(cell[i].innerHTML==="128") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#edcf72";
        }
        else if(cell[i].innerHTML==="256") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#edcc61";
        }
        else if(cell[i].innerHTML==="512") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="lightblue";
        }
        else if(cell[i].innerHTML==="1024") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="blue";
        }
        else if(cell[i].innerHTML==="2048") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="black";
        }
    }
}