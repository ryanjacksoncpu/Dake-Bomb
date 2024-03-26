var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var background = document.getElementById("background")

setInterval(()=>{
ctx.clearRect(0,0,800,800)
ctx.drawImage(background,0,0,800,800)
ctx.drawImage(player1, posX1, posY1, 100,100)
ctx.drawImage(player2,posX2,posY2,100,100)}

)