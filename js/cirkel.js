//Cirkel
let straal = document.getElementById("straal");
let oppervlakte = document.getElementById("oppervlakte");
let omtrek = document.getElementById("omtrek");
let button1 = document.getElementById("button1");

button1.addEventListener('click', function() {
  let straal2 = parseFloat(straal.value);
 var a = Math.floor(3.14 * straal2 * straal2);
 var b = Math.floor(2 * 3.14 * straal2);

oppervlakte.innerHTML = a;
omtrek.innerHTML = b;
});
