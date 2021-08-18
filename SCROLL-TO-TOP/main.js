
const scrollBtn = document.querySelector('.scroll-up');
const rootEl = document.documentElement;

//EVENT LISTENERS
scrollBtn.addEventListener('click', ()=> {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.addEventListener('scroll', showBtn)


//FUNCTION
function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    
    if(rootEl.scrollTop / scrollTotal > 0.4) {
        document.querySelector('.scroll-up').classList.add('show-scroll')
    } else {
        document.querySelector('.scroll-up').classList.remove('show-scroll')
    }
}

