const textBox = document.getElementById("temp");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcious = document.getElementById("toCelcious");
const tempResult = document.getElementById("tempResult");
const Submit = document.getElementById("Submit");
let temp;

Submit.onclick = function get() {
    
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


}