const genBtn = document.querySelector('.gen-btn');

const getRandomNumber = () => {
    const randomNum = Math.floor(Math.random()* 10 + 1);
    document.querySelector('.number-text').innerHTML = randomNum;
};

genBtn.addEventListener('click', getRandomNumber);
