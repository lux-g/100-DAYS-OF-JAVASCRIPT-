const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const tasks = document.querySelector('.tasks');
const clearTask = document.querySelector('.clear-btn');


//MAIN TASK
const addTask = (e)=> {
    e.preventDefault()

    if(input.value != "") {
        createNewDiv()
        clearInput()
    } else return
};

//CREATE DIV FOR TASKS
const createNewDiv = () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('tasks__wrapper');
    newDiv.innerHTML = `
        <p class="single-task">${input.value}</p>
        <i class="far fa-trash-alt trash-btn"></i>
    `
    tasks.appendChild(newDiv)

    newDiv.addEventListener('click', (e) => {
        completeTask(e.target)
        //getParent(e.target)
    })
}
//COMPLETE TASK
const completeTask = (item) => {
    item.style.textDecoration = "line-through";
    item.style.opacity = "0.4"
}
//DELETE ALL TASKS
const deleteTasks = () => {
    tasks.innerHTML = ""
}

//CLEAR INPUT
const clearInput = () => {
    input.value = ""
}
// const getParent = (item) => {
//     const parent = item.parentElement
//     parent.removeChild(item)
    
// }


//EVENT LISTENERS
addBtn.addEventListener('click', addTask)
clearTask.addEventListener('click', deleteTasks)