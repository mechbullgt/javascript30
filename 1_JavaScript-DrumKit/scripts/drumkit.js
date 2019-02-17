function playSound(e){
    console.log(e);
    if(e.keyCode==68){
        console.log("got D");
        
    }
}

window.addEventListener('keydown',playSound);