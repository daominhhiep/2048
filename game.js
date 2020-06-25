function DrawBoard() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(0,400);
    ctx.moveTo(0,400);
    ctx.lineTo(400,400);
    ctx.moveTo(400,400);
    ctx.lineTo(400,0);
    ctx.moveTo(400,0);
    ctx.lineTo(0,0);

}

function DrawLine() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            ctx.moveTo(i * 100, 0);
            ctx.lineTo(i * 100, 400);
            ctx.moveTo(0, i*100);
            ctx.lineTo(400, i*100);
            ctx.stroke();
        }
    }
}


DrawBoard();
DrawLine();