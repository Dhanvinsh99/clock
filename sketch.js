var n = 0

function setup() {
  createCanvas(800,400);


  
}

function draw() {
  background(255);
  stroke(30)
  textSize(30)

var n = 0
if(n === 0){
  var hrs = hour()
  var mins = minute()
  var secs = second()
  text("24 hrs :" + hrs + ":" + mins + ":" + secs,  500, 200)
 }
 
 x = 0
 if(x===0){
  var hrs = hour()
  var mins = minute()
  var secs = second()
  if(hrs > 12){
    hrs = hrs - 12
  }
  text("12 hrs :" + hrs + ":" + mins + ":" + secs,  500, 300)
 }
  drawSprites();
}