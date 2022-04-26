difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(1300, 800);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is initialized!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX ="+ leftWristX + "rightWristX =" + rightWristX + "difference ="+ difference );
    }
}

function draw() {
    background('#EC5800');
    document.getElementById('font_size').innerHTML = "Font size is" + difference + "px";
    textSize(difference);
    fill('#E97A4A');
    text('Amy', 50, 400);
}