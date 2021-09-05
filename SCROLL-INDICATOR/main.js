window.addEventListener('scroll', handleScroll)

function handleScroll(){
    //body is for safari browsers and document.documentElement targets all other browsers
    let currentState = document.body.scrollTop || document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const totalScroll = (currentState / pageHeight) * 100 //*100 so its up to 100 percent;
    document.querySelector('.line').style.width = totalScroll + "%"
}
