import ls from 'prompt-sync';
const consola = ls();


while (true){
    console.log("------Programa de Tablas de multiplicación------");
    
    const numero = parseInt(consola("ingrese el numero: "))

        for (let i = numero; i <= numero; i++){
            for (let n = 0; n < 10; n++) {
                let r = i * n;
                console.log(i+" x "+n+" = "+ r);
            }
        }
    let otroNum = consola("desea repetir el Programa? ")
    if (otroNum.toLocaleLowerCase() === "si"){
        continue
    } else {
        console.log("chao con adios");
        break
    }
}
