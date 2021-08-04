const form = document.querySelector('form');
const input = document.querySelector('.input');
const number = document.querySelector('.number');

input.addEventListener('keyup', (e) => {
    console.log(e.target.value.length)
    number.innerHTML = e.target.value.length
})