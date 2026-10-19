// Personaje de TV

let nombre= "Tanjiro";
let animme="Demon Slayer";
let edad= 16;

let personaje={  // Asi es crito con llaves{} , personaje es un objeto literal
    nombre:"Jesús Rivas",    // a la linea completa se le llama: Par llave - valor
    anime: "Spiderman", // a la linea completa se le llama: Par llave - valor 
    edad:16,                /* En otros lenguajes a la llave le dicen atributo, pero en Javascript
                              se le llama  tambien propiedad, en conclusión en Javascript se le 
                              dice a la llave, propiedad y llave*/
    nombre: "Jesus Daniel",
    anime:"X-Men",
    edad:17,                          
}; 

personaje.edad=3;                       /* Es posible modificar el valor de una propiedad usando esta notación,
                                           //más útil cuando se conoce el valor de la propiedad que
                                           //se va a modificar*/     

personaje ['anime']= 'Big ban theory';  /* Támbien se puede modificar el valor de una propiedad usando [],
                                            es más útil cuando no sabemos el de la propiedad y tenemos 
                                            que iterar, se crea una variable entre comillas simple
                                            y se coloca en el argumento el nombre de la variable */
                                        
let llave='edad'                            /** Modifico la propiedad edad, usando una variable
                                              con el nombre "llave", llave='edad'*/
personaje [llave]= 150; 

console.log(personaje.edad);
console.log(personaje ["nombre"]);
console.log(personaje ["anime"]);

delete personaje.anime ;     //Con la palabra reservada "delete" elimino la propiedad anime

console.log(personaje);




  