let budget = 100;
let product = prompt("Cost of product")
let tekst = document.getElementById("h1");

if ( product < budget ) {
    tekst.innerText = "U heeft genoeg geld!";
    tekst.style.color = "limegreen";
}

else {
    tekst.innerText = "Helaas, te weinig geld!";
    tekst.style.color = "red";
}