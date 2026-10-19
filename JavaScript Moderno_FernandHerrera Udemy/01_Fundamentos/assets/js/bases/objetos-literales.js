let personajes = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,    
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.709
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    
    'ultima-pelicula': 'Infinity War',
    
    funcion: function suma(a,b) {
        return a + b;
    }
};      

console.log('No de trajes:', personajes.trajes.length);  

console.log('(lat: ',personajes.coords.lat,'long: ',personajes.coords.lng,')');

/* Uso de espacios y guiones en propiedades de objetos */
console.log('Última película:', personajes['ultima-pelicula']); // Se puede acceder a propiedades con guiones usando corchetes y comillas. No se puede acceder con notación de punto.

console.log('Suma desde objeto:', personajes.funcion(5, 3)); // Se puede acceder a funciones dentro de objetos usando notación de punto.


// Mas detalles 

// Eliminar propiedad de un objeto
delete personajes.edad; // Elimina la propiedad edad del objeto personajes
console.log(personajes)

/*
Notas:
1) Una curiosidad es que los objetos se imprimen en consola en orden alfabetico, no en el orden en que se definen en el codigo, caso contrario con los arrays que si se imprimen en la consola segun el oredn en que se crean
2) Pudieramos pensar que al definir un objeto con "cosnt" y no con "let" , estamos bloqueando agregar propiedades al objeto, pero no es asi, lo que se bloquea es el reasignar o redefinir la variable , por otro tipo de variable, array, numero, boleano, string , etc 
*/

personajes.casado=true   // agregar una propiedad al objeto personajes 

//Convertir un objeto en un arreglo de arreglos de pares (Llave:valor)
const entrePares= Object.entries(personajes) 
console.log("Arreglo de arreglos , llave-valor:", entrePares)

