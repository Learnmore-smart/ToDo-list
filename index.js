const quotes = [
    "A goal without a plan is just a wish. - Antoine de Saint-Exupéry",
    "The key is not to prioritize what's on your schedule, but to schedule your priorities. - Stephen Covey", 
    "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - Francis of Assisi",
    "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson", 
    "The best way to predict the future is to create it. - Abraham Lincoln, Peter Drucker",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "Don't wait for the perfect moment, take the moment and make it perfect. - Zoey Sayward",
    "You don't have to see the whole staircase, just take the first step. - Martin Luther King, Jr.",
    "Clutter is nothing more than postponed decisions. - Barbara Hemphill",
    "The shorter the list, the more likely you are to get it done. - Timothy Ferriss",
    "What gets measured gets managed. - Peter Drucker",
    "Your mind is for having ideas, not holding them. - David Allen",
    "A plan is a bridge to your dreams. Your job is to make the plan or bridge real so that your dreams can run across. - Suzy Kassem", 
    "Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Abraham Lincoln", 
    "Efficiency is doing things right. Effectiveness is doing the right things. - Peter Drucker",
    "By failing to prepare, you are preparing to fail. - Benjamin Franklin",
    "The man who moves a mountain begins by carrying away small stones. - Confucius", 
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller", 
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. - Stephen King",
    "The greatest weapon against stress is our ability to choose one thought over another. - William James", 
    "Concentrate all your thoughts upon the work at hand. The sun’s rays do not burn until brought to a focus. - Alexander Graham Bell",
    "You will never reach your destination if you stop and throw stones at every dog that barks. - Winston Churchill", 
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
    "It is not the mountain we conquer, but ourselves. - Sir Edmund Hillary", 
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The most effective way to do it, is to do it. - Amelia Earhart",
    "Do the hard jobs first. The easy jobs will take care of themselves. - Dale Carnegie",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Action is the foundational key to all success. - Pablo Picasso",
    "Focus on being productive instead of busy. - Tim Ferriss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is a collection of problems solved. - I.V. Arnold",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is what we make it, always has been, always will be. - Grandma Moses", 
    "The difference between winning and losing is most often not quitting. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "You can do anything you set your mind to. - Benjamin Franklin",
    "The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart",
    "Every strike brings me closer to the next home run. - Babe Ruth",
    "Defeat is not the worst of failures. Not to have tried is the true failure. - George Edward Woodberry",
    "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",
    "The most courageous act is still to think for yourself. Aloud. - Coco Chanel",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins", 
    "Don't let yesterday take up too much of today. - Will Rogers",
    "The purpose of our lives is to be happy. - Dalai Lama", 
    "Life is a succession of lessons which must be lived to be understood. - Helen Keller",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
]

document.addEventListener('DOMContentLoaded', generateQuote);

const quoteElement = document.getElementById("quote"); // Replace with your element's ID
const usedIndexes = new Set(); // Initialize an empty Set to keep track of used quotes


function generateQuote() {
// Check if all quotes have been used
if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear(); // Reset if all quotes have been used
}

while (true) {
    const randomIDX = Math.floor(Math.random() * quotes.length);

    // Check if the index has already been used
    if (usedIndexes.has(randomIDX)) {
    continue; // If used, skip to the next iteration
    }

    // If not used, display the quote and add the index to the Set
    const quote = quotes[randomIDX];
    quoteElement.innerHTML = quote; 
    usedIndexes.add(randomIDX);
    break; // Exit the loop

}
} 









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
    if (value === "") { 
        alert("Even the smallest step forward starts with putting pen to paper. 🖋️");
        return; 
    }

    // Add task
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

