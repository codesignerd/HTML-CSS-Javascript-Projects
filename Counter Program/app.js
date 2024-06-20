let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let counterDisplay = document.getElementById("display");

let counter = 0;

// Initialize counter program
document.addEventListener("DOMContentLoaded", function () {
    increaseBtn.addEventListener("click", increaseCounter);
    decreaseBtn.addEventListener("click", decreaseCounter);
    resetBtn.addEventListener("click", resetCounter);
})

// counter increment
function increaseCounter() {
    counter++;
    counterDisplay.textContent = counter;
}

// counter decrement
function decreaseCounter() {
    counter--;
    counterDisplay.textContent = counter;
}

// counter reset
function resetCounter() {
    counter = 0 ;
    counterDisplay.textContent = counter;
}
