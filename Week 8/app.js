let output = document.getElementById("out")

function plusCalculate() {
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let x = Number(input1.value);
    let y = Number(input2.value);
    output.innerText = x + y;

    if (x < 0 || y < 0) output.innerText = "te laag"
}

function minusCalculate() {
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let x = Number(input1.value);
    let y = Number(input2.value);
    output.innerText = x - y;

    if (x < 0 || y < 0) output.innerText = "te laag"
}

function timesCalculate() {
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let x = Number(input1.value);
    let y = Number(input2.value);
    output.innerText = x * y;

    if (x < 0 || y < 0) output.innerText = "te laag"
}

function divideCalculate() {
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let x = Number(input1.value);
    let y = Number(input2.value);
    output.innerText = x / y;

    if (x < 0 || y < 0) output.innerText = "te laag"
}