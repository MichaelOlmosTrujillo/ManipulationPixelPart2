const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// mouse 
let mouse = {
    x: null, 
    y: null,
    radius: 100
}
window.addEventListener('mousemove', function(event){
    // ClientLeft and ClientTop gives the width of the border of a Html element
    mouse.x = event.x + canvas.clientLeft/2;
    mouse.y = event.y + canvas. clientTop/2;
});

function drawImage(){
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight); // To study this function getImageData
}