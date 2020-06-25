function k_key() {
    switch (window.event.keyCode) {
        case 37:
            console.log('trai');
            break;
        case 39:
            console.log('phai');
            break;
        case 38:
            console.log('len');
            break;
        case 40:
            console.log('xuong');
            break;
    }
}
document.onkeydown=function () {
    k_key()
};