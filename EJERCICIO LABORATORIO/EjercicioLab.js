// Inicio

//Declarar variables
let n1;
let n2;
let n3;
let examen;
let promedio;
let trabajo;
let calificacion;

//Leer datos

n1 = Number(prompt('ingrese la nota 1'));
n2 = Number(prompt('ingrese la nota 2'));
n3 = Number(prompt('ingrese la nota 3'));
examen = Number(prompt('ingrese la nota del examen'));
trabajo = Number(prompt('ingrese la nota del trabajo final'));

//Procedimiento

promedio = (n1 + n2 * n3)/3;
calificacion = (n1+n2+n3)/3*0.55 + examen*0.30 + trabajo*0.15;
//Imprimir

console.log('La calificacion es:' + calificacion)

