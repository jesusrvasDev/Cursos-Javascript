//function crearPresona(nombre,apellido){
//    return {
//        nombre:nombre,
//        apellido:apellido
//    }
//}

crearPresona= (nombre,apellido)=>({nombre,apellido})
const nuevaPersona=crearPresona('Jesus','Rivas');
const nuevaPersona2=crearPresona('Ana','Rivas');

//console.log(nuevaPersona)
//console.log(nuevaPersona2)

//Llamando argumentos funcion trdicional
    /*function imprimeArgumentos (){
        console.log(arguments)
    }*/

//Llamando argumentos con funcion flecha 
const imprimeArgumentos2=()=>{console.log(arguments)}   //La funcion de flecha no maneja arguments. da error, arguments solo para funciones tradicionales
const imprimeArgumentos3=(args)=>{console.log(args)}   // Para trabajar con los argumentos en la funcion flecha, se debe indicar args en los pararentesis correspondientes a los argumentos, esta forma solo nos trae el primer argumento que recibe la funcion  
const imprimeArgumentos4=(...args)=>{console.log(args)}   // De esta manera si trae todos los argumentos que recibe la funcion, colocando los tres puntos antes de la palabra args dentro del parentesis,(...) parametro rest 
const imprimeArgumentos5=(nombre,apellido,arreglo,...args)=>{
    //console.log({nombre,apellido,arreglo,args}) // Se comento para extraer solo las variables de arreglo args
    return {nombre,apellido,arreglo,args}
} // De esta manera se extrae todos los argumentos que recibe la funcion, colocando los tres puntos antes de la palabra args dentro del parentesis,(...) parametro rest y retornando un objeto  

imprimeArgumentos5("jesus",'rivas',[],{},true,49,1.7)

//Extraer argumentos de la funcion y asignarle nombres de variables o propiedades
const {nombre,apellido,arreglo,objeto,args} = imprimeArgumentos5("jesus",'rivas',[],{},true,49,1.7)



console.log('Extraccion variable nombre:',nombre) // Extrae solo la variable nombre
console.log('Extraccion variable apellido:',apellido)
console.log('Extraccion variable arreglo:',arreglo)
//console.log('Extraccion variable objeto:',objeto)
//console.log('Extraccion variable edad:',edad)
//console.log('Extraccion variable estatura:',estatura)
console.log(args)

//Objeto para desestructurar 
const tony = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,    
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.709
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

/* const desectructuraObjeto=(personaje)=>{
    console.log(personaje.nombre)    
    console.log(personaje.codeName)    
    console.log(personaje.vivo)    
    console.log(personaje.edad)    
    console.log(personaje.cords)    
    console.log(personaje.trajes)    
}
 */

const desectructuraObjeto2=({nombre,codeName,vivo,edad,cords,trajes})=>{
    console.log({nombre}),
    console.log({codeName}),
    console.log({vivo}),
    console.log({edad}),
    console.log({cords}),
    console.log({trajes})
}
desectructuraObjeto2(tony)

/*Protips:
1) Cuando se quiere retornar un objeto y la propiedad y la clave son iguales , no hace falta escribir ambas veces el mismo texto, solo se escribe una vez
    return{
    nombre,
    apellido
    }

2) Cuando queremos retornar un objeto usando la funcion flecha, no resulta dejar de escribir la palabra reservada return como en el caso que solo queremos regresar es el return, para que funciones debemos encerrar en parentesis el objeto para que la funcion flecha los reconozca. ({nombre,apellido}). Esto se debe a que la funcion esta reconociendo las llaves como cuerpo de la funcion.

3) En el caso de necesitar trabajar con argumentos en una funcion flecha se debe colocar entre paretesis y en el inicio tres puntos seguido de la palabra que hace referencia a los argumentos,(args,argumentos,argumets,..etc)  (...,args) y no colocar mas nada desdpues de esa palabra, despues del parametros rest no puede venir otra cosa 

4) Si se quieres extraer un valor independiente del resto de los argumentos, es decir extraer una variable del arreglo arguments, debes indicarlo de manera independiente 

*/