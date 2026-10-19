
// Pasando o asignando valor a tipo primitivo
let a =10;
let b=a;
a = 30;
console.log({a,b});  // Imprime en consola las variables a y b con sus respecivos valores, en forma de un objeto literal. {key:value}

// Pasando o asignando valor por referencia
let jesus = {nombre:'Jesus'};
let ana   = jesus
// ana.nombre='Anna'
console.log({jesus,ana})

/* let valor  = 1;
let valor2 = 'uno';
console.log({valor,valor2}) */

/* 
Notas:
1) Toda asignacion a variable o valor pasado a funciones con tipo de dato primitivo se realiza por valor, es decir, no estamos afectando el mismo lugar en memoria.
*/

