var player1Default = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg"
var p1Shot = "/Assets/Player1/CatShoot.jpg"
var player1 = document.getElementById("player1")

var shotFaking1 = false
var shooting1 = false

var movingForwards1 = false

var canShoot1 = true

var moving1 = false
setInterval(()=>{
if(aIsPressed || dIsPressed || wIsPressed || sIsPressed){
    moving1 = true
}else{moving1 = false}})


document.addEventListener("keypress",function shotFake1(){
    if(!moving1){
        if(event.key == "e"){
            document.removeEventListener("keypress",shotFake1)
            console.log("shot fake")
            shotFaking1 = true
            clearInterval(faceAngleUpdateID)
            player1.src = p1Shot
            setTimeout(()=>{
            faceAngleUpdateID = setInterval(faceAngleUpdate)
            shotFaking1 = false
                             setTimeout(()=>{document.addEventListener("keypress",shotFake1)},500)
            },300)
        }
    }
})

setInterval(()=>{
if(movingForwards1){
    document.addEventListener("keypress", shoot1)
}else{
    document.removeEventListener("keypress", shoot1)
}
})

function shoot1(){
    if(event.key == "e" && canShoot1 == true){
        shooting1 = true
        canShoot1 = false
        console.log("shot")
        clearInterval(faceAngleUpdateID)
        player1.src = p1Shot
        setTimeout(()=>{
            shooting1 = false
            faceAngleUpdateID = setInterval(faceAngleUpdate)
            setTimeout(()=>{canShoot1 = true},1000)
        },800)
    }
}
