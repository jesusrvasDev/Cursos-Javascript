/*
CON LOS OPERADORES PODEMOS CREAR EXPRESIONES 
CON LAS EXPRESIONES PODEMOS CREAR ALGORITMOS 
CON LOS ALGORITMOS PODEMOS SOLUCIONAR PROBLEMAS 
*/
// **OPERADORES ARITMETICOS***

console.log("Operadores matemáticos con Javascript")
console.log("Se definen las variables a y b y se le asignan valor:")
console.log("a = 5  y b = 7:")

let a=5;
let b=7;
let c=8;

console.log("La resta a-b es:",a-b,);    // Resta
console.log(a+b,  'Adición');    // Adición
console.log(a*b,  'Multiplicación');    // Multiplicación
console.log(a/b, 'División');    // Dicisión
console.log(b % a, 'Módulo');  // Módulo
console.log(a ** b, 'Potencia'); // Potencia

// INCREMENTAR 
console.log(a);     // Muestra el valor de a=5
console.log(++a);   // Muestra el valor de a= 5+1=6
console.log(a++);   // Muestra el valor de a=1+5=6
console.log(a);     // Muestra el valor actual de a=7

// DECREMENTAR
console.log(--a);   // Muetra el valor de a= 7-1=6
console.log(a--);   // Muetra el valor de a= 1-7 =6
console.log(a);     // Muestra el valor actual de a=5 




function suma(a,b) {

    return a+b;
};

suma(6,5);
resultado=suma(6,5);

console.log(resultado); 

console.log(typeof suma);

//PRACTICANDO CÓDIGO//

MATRIZ=[];

MATRIZ[0]=46;
MATRIZ[1]=16;
MATRIZ[2]=7;
MATRIZ[3]=50;

console.log(MATRIZ); 


console.log(typeof MATRIZ); 

let miFamilia= {
    papa:'Chucho',
    mama:'Rosita',
    hijo:'Jesús Daniel',
    hija:'Ana Paula'  
};

console.log(miFamilia);

MATRIZ2=[1,0,0];

console.log(MATRIZ2);

MATRIZ3=[];

MATRIZ3[0]=0;
MATRIZ3[1]=1;
MATRIZ3[2]=0;

console.log(MATRIZ3); 

MATRIZ4=[0,0,1]

console.log(MATRIZ4);

let estudioLenguajes = {
    frontend1: 'HTML',
    frontend2:'ccs',
    frontend3:'java script',
};

console.log(estudioLenguajes);

let estudiantes = {
    primerNombre:'Jesús',
    primerApellido:'Rivas',
    numeroCedula: 14032152, 
};

console.log(estudiantes); 

let d=++c
console.log(c);
