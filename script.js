   const taskForm = document.getElementById('new_task')
   const taskContainer = document.getElementById('task_container') 
    
    const generateCard = (taskData) => {
    console.log(taskData)
    const taskCard = document.createElement('div')
    
    taskCard.classList.add('task')
    const taskDelete = document.createElement('div')
    taskDelete.addEventListener('click', (event) =>{
        console.log(event.target.parentElement)
        console.log(event.target.parentNode)
        event.target.parentNode.remove()
    })

    
    taskDelete.classList.add('delete')
    taskDelete.innerText = "X"
    const taskHeader = document.createElement('div')
    taskHeader.innerText = taskData.due_date
    const taskTitle = document.createElement('h3')
    taskTitle.innerText = taskData.title
    const line = document.createElement('hr')
    const taskDesc = document.createElement('p')
    
    taskCard.append(taskDelete ,taskHeader, taskTitle, line, taskDesc)

    taskContainer.append(taskCard)

}

taskForm.addEvenListener('submit', (event) => {
    event.preventDefault()
    let formData = Object.fromEntries(FormData(taskForm)
    generateCard(formData))
})
