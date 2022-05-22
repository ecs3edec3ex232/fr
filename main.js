function Preload(){

}

function setup(){
    canvas = createCanvas(820,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,240,50,350,360);
    
    
    fill('rgb(10%,100%,10%)');
    stroke('rgb(10%,100%,10%)');
    rect(250,45,320,20);
    rect(250,400,320,20);
    rect(235,60,20,320);
    rect(585,60,20,320);
  

    fill('rgb(100%,0%,10%)');
    stroke('rgb(100%,0%,10%)');
    circle(250,60,72);
    circle(250,400,72);
    circle(590,60,72);
    circle(590,400,72)
}