var player1 = document.getElementById("player1")

var aIsPressed = false
var wIsPressed = false
var dIsPressed = false
var sIsPressed = false
var changeX1 = 2
var changeX2 = 2
var changeY1 = 1
var changeY2 = 1

document.addEventListener("keydown", () => {
    if(event.key == "a"){
        aIsPressed = true
        
    }else if(event.key == "d"){
        dIsPressed = true
       
    }
})
document.addEventListener("keyup", () => {
    if(event.key == "a"){
        aIsPressed = false
        
        
    }else if(event.key == "d"){
        dIsPressed = false
        
    }
})
document.addEventListener("keyup", ()=>{
    if(event.key == "w"){
        wIsPressed = false
        
    }
    if(event.key == "s"){
        sIsPressed = false
        
    }
})
document.addEventListener("keydown", () => {
    if(event.key == "w"){
        wIsPressed = true
    }
    if(event.key == "s"){
        sIsPressed = true
        
    }
})

var player1Movement = [
()=>{
    if(aIsPressed && posX1 >=-50){
        posX1 -= changeX1
    }
},
()=>{
    if(dIsPressed && posX1 <= 750){
        posX1 += changeX1

    }
    },

()=>{
    if(wIsPressed && posY1>=280){
        posY1 -= changeY1
        
    }

    },
    

()=>{
    if(sIsPressed && posY1 <= 650){
        posY1 += changeY1
    }
}]

for(let i = 0; i < player1Movement.length; i++){
    setInterval(player1Movement[i],30)
}


   
