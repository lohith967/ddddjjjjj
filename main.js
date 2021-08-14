song = "";
song22 = "";
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
rightWristX = 0;

function preload(){
    song = loadSound("music.mp3");
    song22 = loadSound("atmospheric-hip-hop-background-sample-voice-version-4949.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function draw(){
    image(video ,0 ,0 ,600 ,500);
    fill("red");
    stroke("red");
    circle(leftWristX,leftWristY,20.4);
    innumberleftWristY = Number(leftWristY);
    remove_decimals = floor(innumberleftWristY);
    circle(rightWristX,rightWristY,20.4);
}

function play_sound(){
    song.play();
}
function Play_sound(){
    song22.play();
}

function Stop_song(){
    song.pause();
song.currentTime = 0;
}

function stop_song2(){
    song22.pause();
song22.currentTime = 0;
}

function set_volume(){
    song.setVolume(2);
    song22.setVolume(2);
}

function set_speed(){
    song.rate(2);
    song22.rate(2);
}
function gotposes(results){
    if(results.length >0){
    console.log(results);
  
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;

    console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    
    
    }
}