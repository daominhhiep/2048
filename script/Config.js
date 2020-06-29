const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_A = 65;
const KEY_D = 68;
const KEY_S = 83;
const KEY_W = 87;
const cell = document.getElementsByClassName("grid_cell");
const score = document.getElementById("score");
const main = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
            ];

let audio1 = new Audio('audio/audio.mp3');
let audio2 = new Audio('audio/background_audio.mp3')
let audio3 = new Audio('audio/background_audio2.mp3')
