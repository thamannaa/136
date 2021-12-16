status_object="";
function preload(){
video=createVideo("video.mp4");
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}

function draw(){
image(video,0,0,480,380);
}

function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("model Loaded");
    status_onject=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}