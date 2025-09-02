// Alumno: Guerrero Mendoza Rodolfo Enrique
// Grupo: 1758

//Obtención de números y conversión a unos y ceros
let num3 = parseInt(prompt("Número 1: ")) ? 1 : 0;
let num4 = parseInt(prompt("Número 2: ")) ? 1 : 0;

//And y Or
let andR = num3 && num4;
let orR  = num3 || num4;

//Imprime los números dados
console.log("Número 1: " + num3);
console.log("Número 2: " + num4);

//Tablas de verdad And y Or
console.log("Tablas de verdad de la and y or:")
console.log("| A | B | AND | OR |");
console.log("| 0 | 0 |  0  |  0 |");
console.log("| 0 | 1 |  0  |  1 |");
console.log("| 1 | 0 |  0  |  1 |");
console.log("| 1 | 1 |  1  |  1 |");

//Resultados
console.log("Resultado de los números dados:")
console.log("| A | B | AND | OR |");
console.log("| " + num3 + " | "+ num4 + " |  " + andR + "  |  " + orR + " |");
