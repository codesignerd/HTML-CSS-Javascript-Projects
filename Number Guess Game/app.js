const minNum = 1;
const maxNum = 100;
const Answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let Attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number from ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Enter a Valid Number!");
    }

    else if (guess < minNum || guess > maxNum) {
        window.alert("Enter a Valid Number!");
    }

    else {
        Attempts++;
        if (guess < Answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        }

        else if (guess > Answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }

        else {
            window.alert(`Correct, The number is ${Answer}. It took you ${Attempts} attempts.`);
            running = false;
        }
    }
}