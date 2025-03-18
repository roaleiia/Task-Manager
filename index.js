let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim()) {
        tasks.push({ name: input.value.trim(), completed: false });
        input.value = "";
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const newName = prompt("Enter new name:", tasks[index].name);
    if (newName) {
        tasks[index].name = newName.trim();
        displayTasks();
    }
}

function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
    <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskStatus(${index})">
    <span class="${task.completed ? "completed" : ""}">${task.name}</span>
    <button onclick="editTask(${index})">Edit</button>
    <button onclick="deleteTask(${index})">Delete</button>
    `;
        list.appendChild(div);
    });
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});