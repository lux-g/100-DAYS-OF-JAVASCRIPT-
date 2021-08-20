const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const mobileNav = document.querySelector('.mobile-nav');
const mobileAllLi = document.querySelectorAll('.mobile-nav-menu li');


//FUNCTIONS
const showMenu = ()=> {
    overlay.classList.add('open-menu');
    mobileNav.classList.add('open-nav')
    document.body.style.overflow = "hidden"
}
const removeMenu = ()=> {
    overlay.classList.remove('open-menu');
    mobileNav.classList.remove('open-nav');
    document.body.style.overflow = "visible"
}
const smoothScroll = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href')
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })

    removeMenu()
}

//EVENT LISTENERS
openBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', removeMenu);

mobileAllLi.forEach(li => {
    li.addEventListener('click', smoothScroll)
})

//HANDLE CLICKOUTSIDE NAVMENU
window.addEventListener('click', (e)=> {
    if(e.target === overlay) {
        overlay.classList.remove('open-menu');
        mobileNav.classList.remove('open-nav');
        document.body.style.overflow = "visible"
    } 
})
