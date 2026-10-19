// Abren los dias de semana a las 11am 
// Abren los fines de semana a las 9am
// Se identifican las variables , dia y horaApertura

// Definicion de las condiciones del dia
const dia= 3;
const horaApertura=11
;

// Programa que evalua las condicion de apertura del negocio diariamente y suministrta un mensaje segun dia de la semana

//Variables del programa
let horaActual=9;
let mensaje;

if (dia===0 || dia===6) {
    if(horaActual>horaApertura) {
        console.log(`Por ser fin de semana, cuando son las ${horaActual} , el negocio esta abierto`) 
    } else if (horaActual ===  horaApertura){
        console.log(`Por ser fin de semana y ser exctamente las ${horaActual} , justo en este momento esta abriendo el negocio`)    
    } else{
        console.log(`Los fines de semana el negocio abre despues de las ${horaApertura}`)
    }
} else {
    console.log(`Hoy es dia de semana y abrimos a las ${horaApertura} am`)
}


// Operador ternario

 ([0,6].includes(0,6)) ? console.log(`Es fin de semana y abrimos a las ${horaApertura}`) : console.log(`Por ser dia de semana abrimos a las ${horaApertura}`)



