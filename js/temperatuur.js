//Cirkel
let celsius = document.getElementById("celsius").value;
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

let f = Math.floor((9 * celsius / 5) + 32);
let k = Math.floor(celsius + 273);

function BerekenT() {
  fahrenheit.innerHTML = f;
  kelvin.innerHTML = k;
}

if (celsius == 0) {
  fahrenheit.innerHTML = "type een nummer.";
  kelvin.innerHTML = "type een nummer.";
}
