let tasks = [];

const tasksDiv = document.getElementById("tasks")
const input = document.getElementById("tasksInput")
const storageKey = "tasks"

function renderTasks() {
    tasksDiv.innerHTML = null;

    for (const [idx, task] of Object.entries(tasks)) {
        const container = document.createElement("div");
        container.style.marginBottom = "-10px"; 
        container.style.display = "flex"; 
        container.style.alignItems = "center"; 

        const text = document.createElement("p");
        text.style.display = "inline";  
        text.style.marginRight = "10px";
        text.textContent = task;

        const buttonContainer = document.createElement("div"); // New container for the button
        buttonContainer.style.marginLeft = "auto"; // Push it to the right
        buttonContainer.style.marginRight = "0"; // Reset any default margins

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.color = "rgba(209, 36, 47, 255)";
        button.style.backgroundColor = "white";
        button.onclick = () => removeTasks(idx);

        // Append elements in the correct order
        buttonContainer.appendChild(button); 
        container.appendChild(text); 
        container.appendChild(buttonContainer); // Button container is now a child of the main container
        tasksDiv.appendChild(container);
    }
}

function loadTasks() {
    const oldTasks = localStorage.getItem(storageKey)

    if (oldTasks) tasks = JSON.parse(oldTasks)
    renderTasks()
}

function saveTasks() {
    const stringTasks = JSON.stringify(tasks);
    localStorage.setItem(storageKey, stringTasks)
}

function addTasks() {
    const value = input.value
    if (!value) {
        alert("A task worth doing is worth writing down! 😉")
        return
    }
    tasks.push(value)
    renderTasks()
    input.value = ""
    saveTasks()
}

function removeTasks(idx) {
    tasks.splice(idx, 1)
    renderTasks()
    saveTasks()
}


// Add event listener to input field
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        addTasks();
    }
});

document.addEventListener("DOMContentLoaded", loadTasks)