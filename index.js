
const textBox = document.getElementById("textBox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32
        result.textContent = `${temp} degrees F`
    }
    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9)
        result.textContent = `${temp} degrees C`
    }
    else{
        result.textContent = "Select a Unit "
    }
}