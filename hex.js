const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];

const btn = document.getElementById('btn');
const text = document.querySelector('.text');

function getHexNumber(){
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
         hexColor += hex[getHexNumber()];
    }

    text.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})