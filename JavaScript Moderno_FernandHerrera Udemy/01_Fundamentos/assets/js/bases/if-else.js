let a = 12

 if (a>10){
    console.log('a es mayor a 10')
} else {
    console.log('a es mejor o igual a 10')
} 

// Clase de If y Else If


const hoy=  new Date()   // Sin la palabra reservada new "hoy" no es una funcion y da error llamar al metodo hoy.getDay()
let dia=hoy.getDay()
console.log('La fecha de hoy es:',hoy);
console.log(dia);
console.log({dia});  // 0: Domingo, 1:Lunes, 2:Martes, 3:Miercoles, 4:Jueves, 5:Viernes, 6:Sabado

 if (dia==4){
    console.log('Hoy es Jueves')
} else {
    console.log('Hoy no es JUEVES')
} 
 

// Ejercicio: Usando solo obetos imprimir los dias de la semana en consola, 0: Domingo , 1:Lunes, 2: Martes...

const diaDos=3

semana={
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miércoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sábado'
}

diaLetra= semana[diaDos]

console.log(diaLetra)

