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

    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");

    //If class of the parent is .editMode
    if(containsClass){
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}

/* Part 4 */
let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listItem);
}

/* Part 5 */
let taskCompleted = function(){
    
    //Append the task list item to the #completed-tasks
    let listItem = this.parentNode;
    completedTasksHolder.append(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

/* Part 6 */
let taskIncomplete = function(){
    //Mask task as incomplete
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

/* Part 7 */
let bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    
    //Select taskListItem's children
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    
    //Bind editTask to edit button
    editButton.onclick = editTask;
    //Bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //Bind checkBoxEventHandler to checkboc
    checkBox.onchange = checkBoxEventHandler;
}

/* Part 8 */
//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

/* Part 9 */
//Cycle over incompleteTaskHolder ul list items
for(let i = 0; i < incompleteTaskHolder.children.length; i++){
    //Bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

/* Part 10 */
//Cycle over completedTaskHolder ul list items
for(let i = 0; i < completedTasksHolder.children.length; i++){
    //Bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}