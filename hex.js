"use strict";
// exports.__esModule = true;
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
var btn = document.getElementById('btn');
var text = document.querySelector('.text');
function getHexNumber() {
    return Math.floor(Math.random() * hex.length);
}
btn.addEventListener('click', function () {
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
        hexColor += hex[getHexNumber()];
    }
    text.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
