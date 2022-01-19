function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(100,200)
    canvas=createCanvas(400,400);
    canvas.position(800,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


nosex=0;
nosey=0;
difference=0;
leftWristx=0;
rightWristx=0;

function draw(){
    background('#006699');
    stroke(' #ffaa00');
    fill('#66ffff');
    square(nosex,nosey,difference);
    document.getElementById("squaresize").innerHTML="The size of the square will be =" + difference +"px";
}




function modelLoaded(){
    console.log("PoseNet is initialized");


}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosey=results[0].pose.nose.y;
        nosex=results[0].pose.nose.x;
        console.log("Nose X ="+nosex+",Nose Y = "+nosey);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("left wrist x = "+leftWristx+",right  wrist x = "+rightWristx +"difference = "+difference)
        
    }
}