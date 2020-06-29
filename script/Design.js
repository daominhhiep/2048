function designNumber(){                //gán màu cho các ô trống và ô số
    for (let i = 0; i < cell.length; i++) {
        if(cell[i].innerHTML==="") {
            cell[i].style.backgroundColor="#cdc1b4";
        }
        else if(cell[i].innerHTML==="2") {
            cell[i].style.color="gray";
            cell[i].style.backgroundColor="paleturquoise";
        }
        else if(cell[i].innerHTML==="4") {
            cell[i].style.color="#776e65";
            cell[i].style.backgroundColor="#FF9F65";
        }
        else if(cell[i].innerHTML==="8") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="orange";
        }
        else if(cell[i].innerHTML==="16") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#DED37E";
        }
        else if(cell[i].innerHTML==="32") {
            cell[i].style.color="white";
            cell[i].style.backgroundColor="#26BDA6";
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