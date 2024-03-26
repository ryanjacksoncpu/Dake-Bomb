var sprawlCoolDown1 = false
var movingBackwards1 = false
var movingBackwards2 = false
setInterval(()=>{
    if(!sprawling1 && movingBackwards1 && !sprawlCoolDown1){
        canSprawl1 = true
    }else{
        canSprawl1 = false
    }
})


document.addEventListener("keypress", () => {
    if (event.key == "e" && canSprawl1) {
        sprawling1 = true
        setTimeout(()=>{
            if(!scrambling1 && !scramblingE){
            sprawling1 = false
            }
        }, 500)
        console.log("sprawl");

        clearInterval(faceAngleUpdateID);

        changeX1 = 0
        changeY1 = 0

        player1.src = p1Sprawl;
        sprawlCoolDown1 = true

        document.addEventListener("keyup", function keyupHandler() {
            if (event.key == "e") {
                document.removeEventListener("keyup", keyupHandler); // Remove the event listener

                setTimeout(() => {
                                        setTimeout(()=>{sprawlCoolDown1 = false},400)
                    faceAngleUpdateID = setInterval(faceAngleUpdate);

                    changeX1 = 2
                    changeY1 = 1
                }, 500);
            }
        });
    }
});
document.addEventListener("keypress", () => {
    if (event.key == "/" && canSprawl2 && movingBackwards2 && !sprawling2) {
        console.log("sprawl");
        sprawling2 = true
        clearInterval(faceAngleUpdateID);
        setTimeout(()=>{
            sprawling2 = false
        ,500})

        
        changeX2 = 0
        changeY2 = 0

        player2.src = p2Sprawl;
        canSprawl2 = false;

        document.addEventListener("keyup", function keyupHandler() {
            if (event.key == "/") {
                document.removeEventListener("keyup", keyupHandler); // Remove the event listener

                setTimeout(() => {
                                        setTimeout(()=>{canSprawl2 = true},400)
                    faceAngleUpdateID = setInterval(faceAngleUpdate);

                    changeX2 = 2
                    changeY2 = 1;
                }, 500);
            }
        });
    }
});