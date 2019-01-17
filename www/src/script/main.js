
div = document.getElementById("splash");
text = document.getElementById("splash-title")
cardsView = document.getElementById("wrapper-main");
header = document.getElementById("header");
textLeft = document.getElementById("text-left");

setTimeout(function(){
    div.classList.add("splash-fadeOut");  
    
}, 7000);

setTimeout(function(){
    div.classList.add("splash-none");
    header.classList.add("header-show");
    header.classList.add("header-fade");
    cardsView.classList.add("wrapper-main-fadeIn");
    cardsView.classList.add("wrapper-main-show");
    textLeft.classList.add("text-left-show");
    textLeft.classList.add("text-left-fade");
}, 9000);
