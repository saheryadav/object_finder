status="";
objects=[];
video="";

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

    if(object[i].label == object_name){
        video_webcamLiveView.stop()
        objectDetector.detect(gotResult);
        document.getElementById("status").innerHTML= object_name +" Found";
        var synth= window.speechSynthesis;
        speak_data= object[i].label;
    }
    else{
        document.getElementById("status").innerHTML="Object Not Found"
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status!=""){
        objectDetector.detect(video, gotResult);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object Found";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+ objects.length;

            fill("#FF0000");
            percent= floor(object[i].confidence * 100);
            text(objects[i].label+ "" + percent + "%", objects[i].x + 15 + objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].height, objects[i].width, objects[i].x, objects[i].y);
        }
    }
    
}
function gotResult(){
    if(error, results){
        console.log(error);
    }
    console.log(results);
    objects= results;
}
function stop(){
    video.stop();
}