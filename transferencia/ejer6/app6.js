import ls from 'prompt-sync';
const consola = ls();

const numero = parseInt(Math.floor(Math.random(20 - 1 + 1))) + 1;

console.log("    ¡ADIVINA EL NUMERO!  (1-20)  ");
console.log("");

while (true){
let numeroIngresado = parseInt(consola("ingresa un numero!: "));

    if (numeroIngresado != numero && numeroIngresado < numero){
        console.log("No es el numero! Vuelve a intentarlo");
        console.log("el numero es mayor!");
        console.log("");
    } else if (numeroIngresado != numero && numeroIngresado > numero){
        console.log("No es el numero! Vuelve a intentarlo");
        console.log("el numero es menor!");
        console.log("");
    } else {
        if (numeroIngresado === numero){
            break
        }
    }
}
console.log("  ADIVINASTE EL NUMERO!  ");
console.log(`el numero es ${numero}`);