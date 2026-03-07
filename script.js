let result = document.getElementById("result");

function append(value) {
    if (result.value === "Error") {
        result.value = "";
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
        let expression = result.value;

        if (expression.trim() === "") return;

        result.value = Function("return " + expression)();
    } catch {
        result.value = "Error";
    }
}

function percentage() {
    try {
        result.value = parseFloat(result.value) / 100;
    } catch {
        result.value = "Error";
    }
}

function square() {
    try {
        result.value = Math.pow(parseFloat(result.value), 2);
    } catch {
        result.value = "Error";
    }
}

function squareRoot() {
    try {
        result.value = Math.sqrt(parseFloat(result.value));
    } catch {
        result.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});