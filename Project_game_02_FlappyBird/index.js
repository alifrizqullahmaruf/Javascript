var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// fungsi untuk membuat hole
hole.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+200);
    hole.style.top = random + "px";
    counter++;
});

// Membuat animasi jatuh
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 3)+ "px";
    }
},10)

// Membuat ketika di click maka akan menjalankan fungsi jump
document.addEventListener("keypress", function jump() {
    if (!jumping==1) {
        jumping = 1;
        let jumpCount = 0;
        var jumpInterval = setInterval(function () {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 6)&&(counter<15)) {
                character.style.top = (characterTop - 5) + "px";
            }
            if (jumpCount > 20) {
                clearInterval(jumpInterval);
                jumpCount = 0;
                jumping = 0;
            }
            jumpCount++;
        }, 10);
    }
});