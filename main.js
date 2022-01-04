leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(530, 400);

    canvas = createCanvas(550, 520);
    canvas.position(550, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("Posenet is intialized!")
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftwrist x = " + leftWristX + "rightwrist x = " + rightWristX);

        difference= floor(leftWristX - rightWristX);
    }
}
function draw()
{
    background('#ffb6c1');
    fill('#FFFFFF');
    textSize(difference);
    textSize('Haru',40,100);

}