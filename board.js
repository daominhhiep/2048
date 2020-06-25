function drawBoard() {
    ctx.moveTo(0,0);
    ctx.lineTo(0,400);
    ctx.moveTo(0,400);
    ctx.lineTo(400,400);
    ctx.moveTo(400,400);
    ctx.lineTo(400,0);
    ctx.moveTo(400,0);
    ctx.lineTo(0,0);
}

function drawLine() {
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

function Number() {
    this.gird = [
        [0,0,0,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,4,0,0]
    ];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if ( this.gird[i][j] !== 0){
                ctx.fillText(this.gird[i][j],j*100+35,i*100+70);
                ctx.font = "60px time new roman";
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
            }
        }
    }
}

Number();
drawBoard();
drawLine();