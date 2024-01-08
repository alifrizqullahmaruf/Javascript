var character = document.getElementById("character");
var block = document.getElementById("block");




document.addEventListener('keypress',function(event){
    console.log(event.key);
    if (event.key == 'j'){

        if(!character.classList.contains("animation")){
            character.classList.add('animation');
        }
        // console.log("ini J")
        setTimeout(function() {
            character.classList.remove('animation');
        }, 500);
    }
})

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        // block.style.animation = "none";
        // block.style.display = "none";
        alert("You lose.");
    }
}, 10);
