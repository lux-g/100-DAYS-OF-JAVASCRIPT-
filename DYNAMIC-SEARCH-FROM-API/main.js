const URL = "https://jsonplaceholder.typicode.com/users"
const input = document.querySelector('.input')

const getUsers = async() => {
    const res = await fetch(URL);
    const data = await res.json();
    
    const displayData = data.map(person => {
        return `
            <li>${person.name}</li>
        `
    })
    document.querySelector('ul').innerHTML = displayData.join('')
}
getUsers();

input.addEventListener('keydown', () => {
    const li = document.querySelectorAll('li')
    const searchValue = input.value;
    const allLi = li.forEach(one => {
        if(one.innerHTML.toLocaleLowerCase().includes(searchValue)){
            one.style.display = "block"
        } else {
            one.style.display = "none"
        }
    })
});