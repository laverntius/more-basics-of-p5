var newHeight = 50;
var newWidth = 50;


function setup(){
    createCanvas(600,400);
    background(50);
    
}

function draw() {
    if(mouseIsPressed){
        noStroke();
        fill(100,0,25,75)
        rect(mouseX,mouseY, newWidth,newHeight);
    }
}

