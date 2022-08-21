console.log("** EJERCICIO 2: **");

const gato = String.fromCodePoint(0x1F408);
const paso = String.fromCodePoint(0x1F43E);
var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var gatoPasos = gato +" ";

for (let i = 1; i <= cantidadDePasos; i++) {
        gatoPasos += paso;
}

for(let i=1; i<=cantidadDeGatos; i++){
    console.log("Gato #"+i+" : "+ gatoPasos);
}


