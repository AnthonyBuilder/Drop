/**
 * canvas arc
 * 
 * var c = document.getElementById("mCanvas");
 * var ctx = c.getContext("2d");
 * ctx.beginPath();
 * ctx.arc(100, 75, 50, 0, 2 * Math.PI);
 * ctx.fill();
 */

div = document.getElementById("splash");
text = document.getElementById("splash-title")
cardsView = document.getElementById("wrapper-main");
header = document.getElementById("header");
containerLeft = document.getElementById("container-right");
textSync = document.getElementById("textSync");
setTimeout(function(){
    div.classList.add("splash-fadeOut");  
}, 7000);

setTimeout(function(){
    div.classList.add("splash-none");
    header.classList.add("header-show");
    header.classList.add("header-fade");
    cardsView.classList.add("wrapper-main-fadeIn");
    cardsView.classList.add("wrapper-main-show");
    containerLeft.classList.add("container-show");
    containerLeft.classList.add("container-fade");
    textSync.classList.add("sync-fadeIn");
}, 9000);
