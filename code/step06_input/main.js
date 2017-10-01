let canvas;
let canvasContext;
let text;
let keySpace;

window.onload = function () {
    load();
 
    text = 'Hello, Gaëtan';
    if(keySpace) {
        text = 'Bien ou bien ?';
    }

    draw();
}

function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', detectKey, false);
}

function detectKey(e) {
    if (e.keyCode == 32) {
        keySpace = true;
    }
}

function draw() {
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(text, 50, 50);
}