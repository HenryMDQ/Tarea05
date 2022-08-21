console.log("** EJERCICIO 3: **");

const cat = String.fromCodePoint(0x1F408);
const step = String.fromCodePoint(0x1F43E);
const gatoNegro = String.fromCodePoint(0xD83D,0xDC08,0x200D,0x2B1B);
var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var Pasos = " ";

for (let i = 1; i <= cantidadDePasos; i++) {
    Pasos += step;
}

for(let i=1; i<=cantidadDeGatos; i++){
    if (i%2==0){
        console.log("Gato #"+i+" : "+ gatoNegro + Pasos);
    } else{
        console.log("Gato #"+i+" : "+ cat + Pasos);  
    }
}