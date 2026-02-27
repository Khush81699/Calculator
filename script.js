let result = document.getElementById("result");

function append(value){
    result.value += value;
}

function clearDisplay(){
    result.value = "";
}

function deleteLast(){
    result.value = result.value.slice(0,-1);
}

function calculate(){
    try{
        let expression = result.value;
        result.value = Function("return " + expression)();
    }catch{
        result.value = "Error";
    }
}