var character = document.getElementById("character");
var block = document.getElementById("block");
var img = new Image();
var count = 0;
var t;

function lemath(){
    count++;
    var counter = document.getElementById('counter');
    counter.innerHTML = "Score: " + (count -1);
}

function begin(){
    lemath();
    t=setTimeout(begin, 950, window);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(10000);
    begin();
})

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
        character.classList.remove("animate");
},500);}
}

//funktion

var checkDead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 &&
    characterTop>=130){
        block.style.animation = "none";
        block1.style.animation = "none";
        block2.style.animation = "none";
        block.style.display = "none";
        block1.style.display = "none";
        block2.style.display = "none";
        character.innerHTML += '<img src="'+img.src+'" />';
        alert("G4m3 0ver Score: " + (count -1));
        clearTimeout(t);
}
},10);

img.src = '/img/character01.png';

//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by me(metl_play).