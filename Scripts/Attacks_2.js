var player2Default = "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/bernese-mountain-dog.jpg?crop=1.00xw:0.668xh;0,0.252xh&resize=640:*"
var p2Shot = "/Assets/Player2/DogShoot.webp"
var player2 = document.getElementById("player2")
var shotFaking2 = false
var shooting2 = false


var moving2 = false
setInterval(()=>{
if(leftArrowIsPressed || rightArrowIsPressed || upArrowIsPressed || downArrowIsPressed){
    moving2 = true
}else{moving2 = false}})
document.addEventListener("keypress",function shotFake2(){
    if(!moving2){
        if(event.key == "/"){
            document.removeEventListener("keypress",shotFake2)
            console.log("shot fake")
            shotFaking2 = true
            clearInterval(faceAngleUpdateID)
            player2.src = p2Shot
            setTimeout(()=>{
            faceAngleUpdateID = setInterval(faceAngleUpdate)
            shotFaking2 = false
                             setTimeout(()=>{document.addEventListener("keypress",shotFake2)},500)
            },300)
        }
    }
})
