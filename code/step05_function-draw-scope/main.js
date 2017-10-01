let canvas;
let canvasContext;
let text;

window.onload = function () {
    load();
 
    text = 'Hello, Gaëtan';
 
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