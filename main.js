
noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;

function preload(){

}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);


canvas=createCanvas(550,550);
canvas.position(750,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){
background('#F1F7A5');
stroke('#A160FF');
fill('#A160FF');
square(noseX, noseY,difference);
document.getElementById("side").innerHTML="Side of Square= "+floor(difference)+" px";


}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=leftwristX-rightwristX
    }
}