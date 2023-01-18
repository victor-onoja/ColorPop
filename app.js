"use strict";
// export const __esModule = true;
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var btn = document.getElementById('btn');
var text = document.querySelector('.text');
function getColorsNumber() {
    return Math.floor(Math.random() * colors.length);
}
btn.addEventListener('click', function () {
    var colorNumber = getColorsNumber();
    document.body.style.backgroundColor = colors[colorNumber];
    text.textContent = colors[colorNumber];
});
