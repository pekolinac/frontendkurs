function racunaj(a, b) {
    var c = 5;
    var rezultat = (a + b) * c;
    return rezultat;   
}
var rezultatFunkcije = racunaj(4, 6);
console.log("Rezultat je " + rezultatFunkcije);

var prozor;

function otvori() {
    prozor = window.open("zadatak-js/reklama.html", "_blank", "width=320, height= 250");
    setTimeout('zatvori()', 6000);
}

function zatvori() {
    prozor.close();
}



