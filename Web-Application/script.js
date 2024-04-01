// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("Please enter a task!");
        return;
    }
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.textContent = input;
    taskItem.onclick = function() {
        this.classList.toggle("completed");
    };

    // Add delete button for each task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    document.getElementById("taskInput").value = '';
}

// Listen for "Enter" key press event
document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
