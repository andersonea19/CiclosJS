import ls from 'prompt-sync';
const consola = ls();

let number = parseInt(1);

for (let i = 1; i <= 50; i++){
    console.log("     numero: "+number);
    number++

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i === 0){
            console.log("   numero primo: "+ number);
        }
    }
}

