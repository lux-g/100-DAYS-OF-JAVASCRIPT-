const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', ()=> {
    document.querySelector('.modal-bg').classList.add('active')
});

document.addEventListener('click', (e)=> {
    if(e.target === closeBtn || e.target === document.querySelector('.active')) {
        document.querySelector('.modal-bg').classList.remove('active')
    }
})