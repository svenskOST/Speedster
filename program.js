const car1 = document.getElementById("car1")
const car2 = document.getElementById("car2")

var time = temp
var speed1 = temp
var speed2 = temp
var distance1 = temp
var distance2 = temp

if(distance1 > distance2){
    var difference = distance1 - distance2
    var position = difference * 2 + "px"
    car1.style.left = difference
}
else{
    var difference = distance2 - distance1
    var position = difference * 2 + "px"
    car2.style.left = difference
}


