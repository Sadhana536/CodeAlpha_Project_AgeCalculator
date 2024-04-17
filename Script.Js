function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Check if input is not empty
    if (taskInput.value.trim() !== "") {
      // Create new list item
      var li = document.createElement("li");
      li.textContent = taskInput.value;
  
      // Add delete button
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
      li.appendChild(deleteButton);
  
      // Append new list item to task list
      taskList.appendChild(li);
  
      // Clear input field
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }