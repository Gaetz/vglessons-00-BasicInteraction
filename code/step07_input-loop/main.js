let canvas;
let canvasContext;
let text;
let keySpace;

window.onload = function () {
    load();

    text = 'Hello, Gaëtan';
    setInterval(() => {
        if (keySpace) {
            text = 'Bien ou bien ?';
        }
        draw();
    }, 1000 / 60);
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
    // Fill in black
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);
    // Draw in white
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(text, 50, 50);
}