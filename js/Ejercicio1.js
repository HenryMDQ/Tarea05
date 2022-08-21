console.log("** EJERCICIO 1: **");

var gatos = [0x1F63A,0x1F638,0x1F639];
var cantidadDeGatos = 10;
var j=0;

for(let i=1; i<=cantidadDeGatos; i++){
    console.log("Gato #"+i+" : "+ String.fromCodePoint( gatos[j] ));
    j++;
    if (j==3){
        j=0;
    }
}
