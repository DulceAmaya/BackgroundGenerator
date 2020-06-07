var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var body = document.querySelector("body");
var backgroundColor = document.querySelector("#gradient");
var randomButton = document.querySelector("#randomButton");

function setGradient(){
    body.style.background = "linear-gradient(to right, "
                            + color1.value + ", "
                            + color2.value + ", "
                            + color3.value + ")";

    backgroundColor.textContent = body.style.background;
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    color3.value = getRandomColor();

    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);
