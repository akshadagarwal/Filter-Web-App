var nose_x = 0;
var nose_y = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(520, 200);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, model_Loaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 500)
}

function snapshot() {
    save("p5.jpg")
}

function model_Loaded() {
    console.log("Model Ready")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log("results");
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("value of x = "+nose_x+" Value of y = "+nose_y)
    }
}