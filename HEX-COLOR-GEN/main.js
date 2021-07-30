const backgroundColors = ["#008000", "#808080", "#FF0000", "#FFFF00"]
const genBtn = document.querySelector('.container__gen-btn');

genBtn.addEventListener('click', ()=> {
    const randomColor = backgroundColors[Math.floor(Math.random()* backgroundColors.length)];
    document.body.style.backgroundColor = randomColor;
    document.querySelector('.container__hex-num').innerHTML = randomColor;
})