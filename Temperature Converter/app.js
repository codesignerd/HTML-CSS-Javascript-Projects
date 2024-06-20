const textBox = document.getElementById("temp");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcious = document.getElementById("toCelcious");
const tempResult = document.getElementById("tempResult");
const convertBtn = document.getElementById("Submit");
const radio = document.querySelectorAll(".unitGroup input");

let temp;

convertBtn.addEventListener("click", convertValue);

function convertValue() {
    
    if (toFarenheit.checked) {
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32;
        tempResult.textContent = temp.toFixed(1) + "℉";
    }
    
    else if (toCelcious.checked) {
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9); 
        tempResult.textContent = temp.toFixed(1) + "℃";
    }
    
    else {
        
        tempResult.textContent = "Please select a unit";
}

console.log(radio);

}