const input = document.querySelector('.input')

const search = () => {
    const inputValue = input.value;
    console.log(inputValue)
    const li = document.querySelectorAll('li')
    li.forEach(item => {
        if(item.innerHTML.toLocaleLowerCase().includes(inputValue)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
};

input.addEventListener('keydown', search)
