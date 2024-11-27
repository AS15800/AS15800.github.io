/* Part 1 */
//Add new task
let taskInput = document.getElementById("new-task");

//Add button
let addButton = document.getElementById("button")[0];

//ul of #incomplete-tasks
let incompleteTaskHolder = document.getElementById("incomplete-tasks");

//Completed-tasks
let completedTasksHolder = document.getElementById("completed-tasks");

// Function to create a new task item
let createNewTaskElement = function(taskString){
    let listItem = document.createElement("li");

    //Input (Checkbox)
    let checkBox = document.createElement("input");
    
    //Label
    let label = document.createElement("label");

    //Input (text)
    let editInput = document.createElement("input");

    //Button.edit
    let editButton = document.createElement("button");


    //Button.delete
    let deleteButton = document.createElement("button");

    label.innerText = taskString;

    //Each element needs appending
    checkBox.type = "checkbox";
    editInput.type = "text";

    //InnerText encodes special characters, HTML does not.
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    //Append Elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

/* Part 2 */
let addTask = function(){
    let listItem = createNewTaskElement(taskInput.value);

    if(taskInput.value === ""){
        return;
    }

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

/* Part 3 */
let editTask = function(){
    let listItem = this.parentNode;
}