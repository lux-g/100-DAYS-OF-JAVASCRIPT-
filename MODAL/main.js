//VARIABLES
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

//EVENT LISTENER
document.addEventListener('click', (e)=> {
    //OPEN MODAL
    if(e.target === openBtn) {
        modalBg.classList.add('active')
        modal.classList.add('modal-open')
    }
    //CLOSE MODAL
    if(e.target === closeBtn || e.target === modalBg) {
        modalBg.classList.remove('active') 
    }
});