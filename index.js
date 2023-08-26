var noOfDrums = document.querySelectorAll(".drum").length ;
/*
var crashSound = new Audio("sounds/crash.mp3");
var kickBassSound = new Audio('sounds/kick-bass.mp3');
var snareSound = new Audio('sounds/snare.mp3');
var tom1Sound = new Audio('sounds/tom-1.mp3');
var tom2Sound = new Audio('sounds/tom-2.mp3');
var tom3Sound = new Audio('sounds/tom-3.mp3');
var tom4Sound = new Audio('sounds/tom-4.mp3');

for(var i = 0; i < noOfDrums ; i++ ){
    if (i===0) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        tom1Sound.play();
    }  
    )};
    if (i===1) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        tom2Sound.play();
    }  
    )};
    if (i===2) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        tom3Sound.play();
    }  
    )};
    if (i===3) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        tom4Sound.play();
    }  
    )};
    if (i===4) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        snareSound.play();
    }  
    )};
    if (i===5) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        crashSound.play();
    }  
    )};
    if (i===6) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
        kickBassSound.play();
    }  
    )};
}

*/

// detecting the keyt

for(var i = 0; i < noOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        playMusic(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
// for key pressing ---
document.addEventListener("keypress", function(event){
   playMusic(event.key);
   buttonAnimation(event.key);
});

function playMusic (key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;        
                
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;    

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;   
            
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;    

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
            
        default:
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}



    
