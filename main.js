canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
array_Nasa = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars.jpg"];
random_number = Math.floor(Math.random()*5);
console.log(random_number);
roverwidth= 100;
roverheight= 90;
backgroundimage= array_Nasa[random_number];
roverimage= "rover.png";
roverX= 10;
roverY= 10;
function add(){
    backgroundimgTag = new Image();
    backgroundimgTag.onload = uploadBackground
    backgroundimgTag.src = backgroundimage

    roverimgTag = new Image();
    roverimgTag.onload = uploadrover;
    roverimgTag.src = roverimage;
}
function uploadBackground() {
    ctx.drawImage(backgroundimgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(roverimgTag, roverX, roverY, roverwidth, roverheight);

}
window.addEventListener("keydown", mykeydown);

function mykeydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed=='38')
        {
            up()
            console.log("up");
        }
        if(keyPressed=='40')
        {
            down();
            console.log("down");
        }
        if(keyPressed=='37')
        {
            left()
            console.log("left");
            
        }
        if(keyPressed=='39')
        {
            right()
            console.log("right");
        }
}
function up(){
    if(roverY >= 0){
        roverY= roverY - 10
        console.log("when up arrow is pressed, x and y coordinates are"+ roverX + roverY);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(roverY <= 500){
        roverY= roverY + 10
        console.log("when down arrow is pressed, x and y coordinates are"+ roverX + roverY);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(roverX >= 0){
        roverX= roverX - 10
        console.log("when left arrow is pressed, x and y coordinates are"+ roverX + roverY);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(roverX <= 700){
        roverX= roverX + 10
        console.log("when right arrow is pressed, x and y coordinates are"+ roverX + roverY);
        uploadBackground();
        uploadrover();
    }
}
