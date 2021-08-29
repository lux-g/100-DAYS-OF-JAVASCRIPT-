const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=> {
    isDown = true
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
    slider.style.cursor = "grabbing"
    cancelMomentumTracking();
})
slider.addEventListener('mouseleave', ()=> {
    isDown = false
})
slider.addEventListener('mouseup', ()=> {
    isDown = false
    slider.style.cursor = "grab"
    beginMomentumTracking()
})
slider.addEventListener('mousemove', (e)=> {
    if(!isDown) return;
    e.preventDefault();
    //recalc when mouse moves
    const x = e.pageX - slider.offsetLeft;
    const walk = (x- startX) * 1
    let prevScrollLeft = slider.scrollLeft; 
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
})


// Momentum 
let velX = 0;
let momentumID;
  
slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
});  
  
function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}
function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
}
function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95; 

    if (Math.abs(velX) > 0.5){
      momentumID = requestAnimationFrame(momentumLoop);
    }
}