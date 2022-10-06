let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");
let count = 0;
let h1 = document.getElementById("h1");

function counter (){
    count += 1;
    h1.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "blue";
    button.style.backgroundColor = "red";
}

function counter2 (){
    count -= 1;
    h1.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "red";
    button2.style.backgroundColor = "blue";
}
