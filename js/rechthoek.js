//Rechthoek
let lengte = document.getElementById("lengte").value;
let breedte = document.getElementById("breedte").value;
let oppervlakte2 = document.getElementById("oppervlakte2");
let omtrek2 = document.getElementById("omtrek2");

let c = Math.floor(lengte * breedte);
let d = Math.floor(2 * lengte + 2 * breedte);

function BerekenR() {
  oppervlakte2.innerHTML = c;
  omtrek2.innerHTML = d;
}

if ( lengte == 0 && breedte == 0) {
  oppervlakte2.innerHTML = "type een nummer.";
  omtrek2.innerHTML = "type een nummer.";
}
