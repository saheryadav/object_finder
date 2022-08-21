status="";

function setup(){
    canvas= createCanvas(380, 380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function start(){
    objectDetection= ml5.objectDetection('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function draw(){
    image(video, 0, 0, 380, 380);
}