const URL = 'https://jsonplaceholder.typicode.com/users';

const getBtn = document.querySelector('.get-btn');
const usersWrapper = document.querySelector('.users-wrapper');


const getUsers = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
    
    const displayUsers = data.map(user => {
        return `
            <p>Name: ${user.name}, Username: ${user.username}</p>
        `
    })
    usersWrapper.innerHTML = displayUsers.join('')

};

getBtn.addEventListener('click', getUsers);
