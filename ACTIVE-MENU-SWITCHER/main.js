function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href")
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
};

const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('click', smoothScroll)
});


links.forEach(link => {
    link.addEventListener('click', ()=> {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active')
    });
});