var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var colliding = false
setInterval(()=>{
    if(xDifference <= 100 && yDifference <= 100){
        colliding = true
    }else{colliding = false}
    
    if(colliding){

       if(movingForwards1 && (player1Lt || player1Rt)){
        changeX1 = 0
       }else{changeX1 = 2}
       if(movingForwards1 && (player1Abv || player1Blw)){
        changeY1 = 0
       }else{changeY1 = 1}
       
       if(movingForwards2 && (player1Abv || player1Blw)){
        changeY2 = 0
       }else{changeY2 = 1}
       if(movingForwards2 && (player1Lt || player1Rt)){
        changeX2 = 0
       }else{changeX2 = 2}

    }

    
},30)