var scrambling1 = false
var scrambling2 = false
var scramblingE = false
var p2Scramble = "/Assets/Player2/DogSCRAMBLE.webp"
var p1Scramble = "/Assets/Player1/CatSCRAMBLE.jpg"
setInterval(()=>{
    if(colliding){
    if(shooting1 && !sprawling2){
        scrambling1 = true
        clearInterval(faceAngleUpdateID)
        player1.src = p1Shot
        player2.src = p2Scramble
    }
    if(shooting2 && !sprawling1){
        scrambling2 = true
        clearInterval(faceAngleUpdateID)
        player1.src = p1Shot
        player2.src = p2Scramble
    }
    if(shooting1 && shooting2){
        scramblingE = true
        clearInterval(faceAngleUpdateID)
        player1.src = p1Scramble
        player2.src = p2Scramble
    }
}
},30)

