var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;


hole.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
});


setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 3)+ "px";
    }
})

window.addEventListener("keypress", jump);

function jump() {
    if (!jumping) {
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
}