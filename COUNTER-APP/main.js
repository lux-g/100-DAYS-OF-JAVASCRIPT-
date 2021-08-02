const countNum = document.querySelector('#counter');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const save = document.querySelector('.save');

//SAVE TO LOCAL STORAGE
const saveToLocalStorage = () => {
    localStorage.setItem('counter', count)
}

let count = 0;
//get from local storage
countNum.innerHTML = localStorage.getItem('counter')


save.addEventListener('click', ()=> {
    saveToLocalStorage()
})

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