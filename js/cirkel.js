//Cirkel
let straal = document.getElementById("straal").value;
let oppervlakte = document.getElementById("oppervlakte");
let omtrek = document.getElementById("omtrek");

let a = Math.floor(3.14 * straal * straal);
let b = Math.floor(2 * 3.14 * straal);

function BerekenC() {
  oppervlakte.innerHTML = a;
  omtrek.innerHTML = b;
}

if (straal == 0) {
  oppervlakte.innerHTML = "type een nummer.";
  omtrek.innerHTML = "type een nummer.";
}
