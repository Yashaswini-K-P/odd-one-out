var noOfSquares = 6;
var arr = [];
var picked;
var squares = document.getElementsByClassName("square");
var targetColor = document.getElementById("targetColor");
var message = document.getElementById("message");
var head = document.querySelector("h1");
var reset = document.getElementById("New Color");
 
init();

function init() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
        squares[i].addEventListener("click", function() {
            if(this.style.backgroundColor === picked) {
                message.textContent = "Correct!";
                message.style.color = "green";
                changeColor(picked);
                head.style.backgroundColor = picked;
                reset.textContent = "Play Again?";
            } else {
                message.style.color = "red";
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
}
reset.addEventListener("click", resetIn);

function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for(var i=0; i<limit; i++) {
        color.push(rgbGenerator());
    return color;
    }
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
    head.style.backgroundColor = "steelblue";
}