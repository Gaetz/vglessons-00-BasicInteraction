let canvas;
let canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
 
    let text = 'Hello, Gaëtan';
 
    canvasContext.fillStyle = 'white';
    canvasContext.fillText(text, 50, 50);
}