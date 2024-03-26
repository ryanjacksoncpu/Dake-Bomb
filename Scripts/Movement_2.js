var player2 = document.getElementById("player2")

var leftArrowIsPressed = false
var rightArrowIsPressed = false
var downArrowIsPressed = false
var upArrowIsPressed = false



document.addEventListener("keydown", () => {
    if(event.key == "ArrowLeft"){
        leftArrowIsPressed = true
    }else if(event.key == "ArrowRight"){
        rightArrowIsPressed = true
    }
})
document.addEventListener("keyup", () => {
    if(event.key == "ArrowLeft"){
        leftArrowIsPressed = false
    }else if(event.key == "ArrowRight"){
        rightArrowIsPressed = false
    }
})
document.addEventListener("keyup", ()=>{
    if(event.key == "ArrowUp"){
        upArrowIsPressed = false
    }
    if(event.key == "ArrowDown"){
        downArrowIsPressed = false
    }
})
document.addEventListener("keydown", () => {
    if(event.key == "ArrowUp"){
        upArrowIsPressed = true
    }
    if(event.key == "ArrowDown"){
        downArrowIsPressed = true
    }
})


var player2Movement = [
()=>{
    if(leftArrowIsPressed && posX2 >= -50){
        posX2 -= changeX2
    }
},

()=>{
    if(rightArrowIsPressed && posX2 <= 750){
        posX2 += changeX2
    }
    },

()=>{
    if(upArrowIsPressed && posY2 >= 280){
        posY2 -= changeY2
    }
},

()=>{
    if(downArrowIsPressed && posY2 <= 650){
        posY2 += changeY2
    }
    },
]

