//inicio
//Declarar variables

let semana;
let mes;
let sueldo;
let dinero;
let ano;

dinero = Number(prompt ("Ingrese cuanto ahorra" ));

semana = dinero*0.15;
mes = 4* semana;
ano = 12*mes;

alert('total ahorrado:' + ano);
alert('cada semana ahorra 15%' + semana);
document.write ("total ahorrado:" + ano)