//VARIABLES
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

//EVENT LISTENER
openBtn.addEventListener('click', ()=> {
    //OPEN MODAL
    modalBg.classList.add('active')
    modal.classList.add('modal-open')
});

modalBg.addEventListener('click', (e)=> {
    const isOutside = !e.target.closest('.modal')
    console.log(isOutside)
    if(isOutside || e.target === closeBtn) {
        modalBg.classList.remove('active') 
    }
})
