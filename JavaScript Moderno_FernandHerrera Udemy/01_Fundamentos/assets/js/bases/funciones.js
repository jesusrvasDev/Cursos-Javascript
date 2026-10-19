/*
El objetivo principal de las funciones es poder reutilizar codigo en otra parte donde se necesite, sin tener que volver a agregar las mismas lineas de codigo que ya sabemos y probamos lo que pueden realizar. Veamos 4 maneras de declarar funciones.
*/

//1) La manera tradicional 
function saludar(){
    console.log("Funcion saludar:Hola Jesus" );
}
saludar();   // Las funciones se llaman despues de su declaracion, aunque en javascript no marca error por las caracteristicas del lenguaje es una buena practica

//2) Pasando argumentos
function saludar2(nombre) {
    console.log(arguments);
    console.log("Funcion saludar2:",'Hola '+ nombre);
};
saludar2('Jesus','soltero',40,'UCV');

//3) Usando una funcion anonima
const saludar3=function(nombre){
    console.log('Funcion anonima saludar3:','Hola ' + nombre);
};
saludar3('Chucho');

//4) Usando funcion flecha
const saludarFlecha= (nombre)=>{
    console.log('Funcion flecha:', 'Hola ' + nombre);
};
saludarFlecha('Chavez');

/*
Nota:
1) Para versiones anteriores de javascript a la 2015 y para funciones tradicionales(que se declaran con la palabra function) cuando se pasan una cantidad de argumentos mayor a los que requiere la funcion para funcionar, o si solo queremos ver todos estos argumentos que recibe la funcion, lo podemos ver con el objeto interno 'arguments', asi vemos todos los argumentos que esta recibiendo la funcion

2) Las funciones retornan valores que explicitamente indique la palabra reservada return, si una funcion no tiene esa palabra retorna undefine
*/

function multiplica( a,b ){
    return a*b
}

console.log(multiplica(3,2))

function getAleatorio (){
    return Math.random()
}
console.log(getAleatorio())

const getAleatorio2= ()=>Math.random();

console.log('Imprimiendo ramdon flecha:',getAleatorio2());    