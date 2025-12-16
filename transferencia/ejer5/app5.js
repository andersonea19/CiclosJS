import ls from 'prompt-sync';
const consola = ls();

const students = parseFloat(consola("ingrese la cantidad de estudiantes: "));
let notas = 0;
for (let i = 1; i <= students; i++){
    let nota =parseFloat(consola(`ingrese la nota del estudiante ${i}: `));
    notas+= nota;
}

const promedio = notas/students

console.log("el promedio de los estudiantes es: "+promedio);


