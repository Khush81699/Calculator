let result = document.getElementById("result");
let historyList = document.getElementById("history");

function append(value){
    if(result.value.length >= 15){
        return;
    }
    result.value += value;
}

function clearDisplay() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        if (result.value === "") return;

        let expression = result.value;
        let answer = Function("return " + expression)();

        addHistory(expression, answer);

        result.value = answer;
    } catch {
        result.value = "Error";
    }
}

function percentage() {
    if (result.value === "") return;
    result.value = parseFloat(result.value) / 100;
}

function square() {
    if (result.value === "") return;
    result.value = Math.pow(parseFloat(result.value), 2);
}

function squareRoot() {
    if (result.value === "") return;
    result.value = Math.sqrt(parseFloat(result.value));
}

function addHistory(exp, res) {
    if (!historyList) return;

    let li = document.createElement("li");
    li.textContent = exp + " = " + res;
    historyList.prepend(li);
}

document.addEventListener("keydown", function (e) {

    if (!isNaN(e.key)) append(e.key);

    if (["+","-","*","/","."].includes(e.key)) append(e.key);

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") deleteLast();

    if (e.key === "Escape") clearDisplay();
});