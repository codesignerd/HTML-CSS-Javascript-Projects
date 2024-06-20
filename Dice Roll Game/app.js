document.getElementById("rollDice").addEventListener("click", rollDice);

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceImages = document.getElementById("diceImages");
    const diceResult = document.getElementById("diceResult");
    
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="${value}">`);
    }

    diceResult.innerHTML = `
    <label> Dice: ${values.join(' , ')} </label>
    `;
    diceImages.innerHTML = images.join('  ');
}