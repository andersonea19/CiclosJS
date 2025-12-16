import ls from 'prompt-sync';
const consola = ls();


while (true){
    console.log("------Cajero Automatico------");
    
    const saldo = parseFloat(consola("ingrese el saldo inicial: "));
    const fondos = parseFloat(consola("ingrese el total de sus fondos: "));

    if (saldo > fondos) {
        console.log("Puede retirar dinero :)");
    } else {
        console.log("No puede retirar dinero :(");
    }

    let yn = consola("desea continuar el programa? Si/No: ").toLowerCase();
    if(yn === "si"){
        continue
    } else {
        break
    }
}
