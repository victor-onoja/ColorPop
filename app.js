const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const btn = document.getElementById('btn');
const text = document.querySelector('.text');


function getColorsNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
const colorNumber = getColorsNumber();
document.body.style.backgroundColor = colors[colorNumber];
text.textContent = colors[colorNumber];
});

