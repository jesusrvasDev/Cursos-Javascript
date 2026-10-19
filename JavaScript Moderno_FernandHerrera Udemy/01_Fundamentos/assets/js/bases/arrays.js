let superHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Green Lantern"];

let deportes = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo"];

let frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Uva"];

let numeros = [1, 2, 3, 4, 5];

let variable1 = "Universidad";

let mixto = [
    "Hola", 
    42, 
    true, 
    null, 
    undefined, 
    { nombre2: "Juan" }, 
    [1, 2, 3,{ nombre: "Jesus", apellido: "Rivas" }], 
    function suma (a,b) { return a+b},
    (a,b) => { return (a+" "+b); }
];

console.log(mixto[7] (mixto[1],mixto[6][2]));

console.log("Nombre y apellido:", mixto[8](mixto[5].nombre2,mixto[6][3].apellido));
console.log({mixto});                                      

//console.log(mixto[6][3].apellido)

//console.log(mixto[6][3].nombre) 
//console.log({mixto});                   

//console.log(mixto[6][3].apellido)

//console.log(mixto[6][3].nombre) 

//console.log(mixto[5].nombre)

console.log({variable1});

console.log("Suma desde Array:", mixto[7](5,3))




