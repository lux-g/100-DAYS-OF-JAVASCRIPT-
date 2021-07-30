const countNum = document.querySelector('#counter');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');

let count = 0;

addBtn.addEventListener('click', ()=> {
    count = count + 1;
    countNum.innerHTML = count;
    numColor()
});
subtractBtn.addEventListener('click', ()=> {
    count = count - 1;
    countNum.innerHTML = count;
    numColor()
})
resetBtn.addEventListener('click', ()=> {
    count = 0;
    countNum.innerHTML = count;
    numColor()
})

const numColor = () => {
    if(count >= 1) {
        countNum.style.color = "green"
    }
    if(count < 1){
        countNum.style.color = "red"
    }
    if(count === 0) {
        countNum.style.color = "white"
    }
}