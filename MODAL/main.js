//VARIABLES
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

//EVENT LISTENER
openBtn.addEventListener('click', ()=> {
    //OPEN MODAL
    modalBg.classList.add('active')
});

modalBg.addEventListener('click', (e)=> {
    const isOutSide = !e.target.closest('.modal')
    if(isOutSide || e.target === closeBtn) {
        modalBg.classList.remove('active')
    }
})

