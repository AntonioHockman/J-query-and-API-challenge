// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskForm = document.getElementById("task-form")
console.log(taskForm)
// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    // take in a task that is of datatype object
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    console.log("Rendering task list")
    // taskLost is an array - holds multiple objects that we call tasks
    // Iteration through an array

    for (let i = 0; i < taskList.length; i++) {
console.log("TaskList item: ", taskList[i])        
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault()
    console.log("Handle add task should run")
    var title = taskForm.children[1].value
    console.log(title)
    var date = taskForm.children[3].value
    var description = taskForm.children[5].value
    // we are going to create a task object to add to local storage
    var newTask = {title: title,date,description}
    console.log(newTask)
    taskList.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(taskList))
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

// save your changes after deleting a task
    // localStorage.setItem("tasks", JSON.stringify(taskList))

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    if(taskList === null){
        taskList = []
    }
    taskForm.addEventListener("submit", handleAddTask)
    renderTaskList()

});



// Object - {key: value,}
//let person = {
  //  name: "Alex",
    //age: 26
//}
//firstName = firstName.toUpperCase()

//console.log(firstName)
//Array - []
//let people = [person, {name: "Antornio", age: 50}]
//console.log(people)
