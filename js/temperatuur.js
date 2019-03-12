//Cirkel
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let button1 = document.getElementById("button1");

button1.addEventListener('click', function() {
  let celsius2 = parseFloat(celsius.value);
  var f = Math.floor((9 * celsius2 / 5) + 32);
  var k = Math.floor(celsius2 + 273);

    fahrenheit.innerHTML = f;
    kelvin.innerHTML = k;

});
