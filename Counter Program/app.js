let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let counter = document.getElementById("counter");

let count = 0;

increaseBtn.onclick = function() {
        count++;
        counter.textContent = count;
    
}

decreaseBtn.onclick = function() {
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0 ;
    counter.textContent = count;
}
