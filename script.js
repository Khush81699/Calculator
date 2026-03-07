let result = document.getElementById("result");
let historyList = document.getElementById("history");

function append(value){

if(result.value === "Error"){
result.value="";
}

result.value += value;

}

function clearDisplay(){
result.value="";
}

function deleteLast(){
result.value = result.value.slice(0,-1);
}

function calculate(){

try{

let expression = result.value;

if(expression === "") return;

let answer = Function("return " + expression)();

if(answer === undefined || answer === Infinity || isNaN(answer)){
result.value="Error";
return;
}

result.value = answer;

addHistory(expression,answer);

}catch{
result.value="Error";
}

}

function addHistory(exp,res){

let li = document.createElement("li");

li.textContent = exp + " = " + res;

historyList.prepend(li);

}