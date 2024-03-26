var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var p1LTF = "/Assets/Player1/CatLT.png"
var p1RTF = "/Assets/Player1/CatRT.png"
var p1UTF = "/Assets/Player1/CatUP.png"
var p1DTF = "/Assets/Player1/CatDN.png"
var p1Sprawl = "/Assets/Player1/CatLUNGE.jpg"
var p2LTF = "/Assets/Player2/DogLT.png"
var p2RTF = "/Assets/Player2/DogRT.png"
var p2UTF = "/Assets/Player2/DogUP.png"
var p2DTF = "/Assets/Player2/DogDN.png"
var p2Sprawl = "/Assets/Player2/DogLUNGE.png"
var xDifference
var yDifference

var player1Lt = true
var player1Rt = false
var player1Abv = false
var player1Blw = false

var posX1 = 250
var posY1 = 450
var posX2 = 450
var posY2 = 450
var canSprawl1 = true
var canSprawl2 = true
var sprawling1 = false
var sprawling2 = false
var movingForwards1 = false
var movingForwards2 = false

setInterval(() => {
    xDifference = Math.abs(posX2 - posX1)
    yDifference = Math.abs(posY2 - posY1)
})

setInterval(() => {

    document.getElementById("debug").innerText = yDifference
})
setInterval(() => {

    document.getElementById("debugx").innerText = xDifference
})
setInterval(()=>{
    if(posX1 < posX2){
        player1Lt = true
    }else{player1Lt = false}
    if(posX1 > posX2){
        player1Rt = true
    }else{player1Rt = false}
    if(posY1 < posY2){
        player1Abv = true
    }else{player1Abv = false}
    if(posY1 > posY2){
        player1Blw = true
    }else{player1Blw = false}
})
const faceAngleUpdate = () => {
    if (xDifference > yDifference) {
        if (player1Lt) {
            player1.src = p1RTF
            player2.src = p2LTF
        } else if (player1Rt) {
            player1.src = p1LTF
            player2.src = p2RTF
        }
    }
    if (yDifference > xDifference) {
        if (player1Abv) {
            player1.src = p1DTF
            player2.src = p2UTF
        } else if (player1Blw) {
            player1.src = p1UTF
            player2.src = p2DTF
        }
    }
}

setInterval(()=>{
    //Backwards Movement Check PLAYER 1
    if((player1Abv && wIsPressed)||
(player1Blw && sIsPressed)||
(player1Lt && aIsPressed)||
(player1Rt && dIsPressed)){
movingBackwards1 = true
}else{
movingBackwards1 = false
}
   //Forwards Movement Check PLAYER 1
    if((player1Abv && sIsPressed)||
    (player1Blw && wIsPressed)||
    (player1Lt && dIsPressed)||
    (player1Rt && aIsPressed)){
        movingForwards1 = true
    }else {
        movingForwards1 = false
    }
    //Movement Direction Failsafe P1
    if(movingForwards1 && movingBackwards1){
        movingBackwards1 = true
        movingForwards1 = false
    }
    //Backwards Movement Check PLAYER 2
    if((player1Abv && downArrowIsPressed)||
(player1Blw && upArrowIsPressed)||
(player1Lt && rightArrowIsPressed)||
(player1Rt && leftArrowIsPressed)){
    movingBackwards2 = true
}else{movingBackwards2 = false
}

//Forwards Movement Check PLAYER 2
if((player1Abv && upArrowIsPressed)||
(player1Blw && downArrowIsPressed)||
(player1Lt && leftArrowIsPressed)||
(player1Rt && rightArrowIsPressed)){
    movingForwards2 = true
}else{movingForwards2 = false
}
//Movement Direction Failsafe P2
if(movingBackwards2 && movingForwards2){
    movingBackwards2 = true
    movingForwards2 = false
}
})

setInterval(()=>{
    if(movingBackwards1){
        console.log("backwards1")
    }
    if(movingBackwards2){
        console.log("backwards2")
    }
}, 100)

    

var faceAngleUpdateID = setInterval(faceAngleUpdate)
