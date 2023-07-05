index = 0;
function changingColor (){
    let colors = ["green", "black", "blue", "red", "yellow"];
    document.getElementsByTagName("body")[0].style.background = colors [index++];
    if (index> colors.length-1){
        index = 0;
}}


