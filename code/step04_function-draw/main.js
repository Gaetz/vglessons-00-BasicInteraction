let canvas;
let canvasContext;

window.onload = function () {
    load();
 
    let text = 'Hello, Gaëtan';
 
    draw();
}

function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
}

function draw() {
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(text, 50, 50);
}