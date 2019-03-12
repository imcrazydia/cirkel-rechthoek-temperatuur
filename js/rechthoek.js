//Rechthoek
let lengte = document.getElementById("lengte");
let breedte = document.getElementById("breedte");
let oppervlakte2 = document.getElementById("oppervlakte2");
let omtrek2 = document.getElementById("omtrek2");
let button1 = document.getElementById("button1");

button1.addEventListener('click', function() {
  let lengte2 = parseFloat(lengte.value);
  let breedte2 = parseFloat(breedte.value);
  var c = Math.floor(lengte2 * breedte2);
  var d = Math.floor(2 * lengte2 + 2 * breedte2);

    oppervlakte2.innerHTML = c;
    omtrek2.innerHTML = d;
});
