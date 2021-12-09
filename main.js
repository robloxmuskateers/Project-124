function preload() {
}

function setup() {
    canvas = createCanvas(600, 580);
    canvas.position(700, 120);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(75, 150);
    poseNet = ml5.poseNet(video, poseLoad);
    poseNet.on('pose', gotPoints);
}

function poseLoad() {
    console.log("PoseNet is operating");
}

function draw() {
    background("#9ca09c");
}

function gotPoints(outcomes) {
    if(outcomes.length > 0) {
        console.log(outcomes);
    }
}