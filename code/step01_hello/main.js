let canvas;
let canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'white';
    canvasContext.fillText('Hello, ArtFX', 50, 50);
}