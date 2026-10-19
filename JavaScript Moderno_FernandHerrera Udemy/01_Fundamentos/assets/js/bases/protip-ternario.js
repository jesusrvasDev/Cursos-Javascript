const elMayor=(a,b)=> (a>b) ? a: b;

console.log(elMayor(50,41))

// Declaracion y asignacion de una constante con operador condicional ternario
const mienbro= true;
const tieneMenbresia = (mienbro) ? '2 dolares' : '10 dolares';
 
// Definicion y asignacion de un arreglo donde hay elemetos que se generan con operador ternario
const amigo = true
const arr = [
    'Tonny',
    'Flash',
    'Spiderman',
    (amigo) ? 'Superman' : 'Megamente', // Se puede agregar operador condiconal ternario detro de arrays y objetos 
    elMayor(34,56)     // Se puede agregar ejecucion de funciones dentro de las componentes del arreglo y en general ejecutar cualquier operacion.
]

// Definicion y declaracion de constantes o variables con varias condiciones usando operador condicional ternario
const nota = 96;
const grado = nota>=95 ? 'A+' : 
              nota>=90 ? 'A'  :
              nota>=85 ? 'B+' :
              nota>=80 ? 'B'  : 'F'  

console.log(grado)



 

