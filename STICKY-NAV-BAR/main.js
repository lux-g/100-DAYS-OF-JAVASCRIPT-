window.addEventListener('scroll', ()=> {
    const navContainer = document.querySelector('.nav-container');
    window.scrollY > 100 ? 
    navContainer.classList.add('add-stuff')
    :
    navContainer.classList.remove('add-stuff')
})