var random1 = Math.floor(Math.random() * 6) + 1 ;
var randomimage = "images/dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute ("src", randomimage);


var random2 = Math.floor(Math.random() * 6) + 1 ;
var randomimag2 = "images/dice" + random2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src", randomimag2);

if (random1 > random2){
    document.querySelector("h1").innerHTML = " player 1 wins 🎉🏆";
}else if (random2 > random1){
    document.querySelector("h1").innerHTML = " 🎉🏆 player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "draw";
}