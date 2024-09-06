document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTask");

  // Load tasks from Chrome storage
  chrome.storage.sync.get("tasks", function (data) {
    const tasks = data.tasks || [];
    tasks.forEach(function (task) {
      addTaskToUI(task);
    });
  });

  // Add task on button click
  addTaskButton.addEventListener("click", function () {
    const task = taskInput.value;
    if (task) {
      addTaskToUI(task);
      saveTask(task);
      taskInput.value = "";
    }
  });

  // Add task to UI
  function addTaskToUI(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      li.remove();
      removeTask(task);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }

  // Save task to Chrome storage
  function saveTask(task) {
    chrome.storage.sync.get("tasks", function (data) {
      const tasks = data.tasks || [];
      tasks.push(task);
      chrome.storage.sync.set({ tasks: tasks });
    });
  }

  // Remove task from Chrome storage
  function removeTask(taskToRemove) {
    chrome.storage.sync.get("tasks", function (data) {
      const tasks = data.tasks.filter((task) => task !== taskToRemove);
      chrome.storage.sync.set({ tasks: tasks });
    });
  }
});
