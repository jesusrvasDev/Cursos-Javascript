/* Operador switch: Se usa cuando hay varias opciones para evaluar, es importante tener en cuenta:
1) La condicion que evalua la realiza de modo estricto, es decir no solo debe coincidir en caracteres si no en tipo de datos (===)
2) Comienza a ejecutar desde la primera condicion que encuentra como verdadera y continua ejecutando casos uno a uno (Si no se le coloca dentro del caso de interes la palabra reservada break)
3) Para impedir que el operador continue ejecutando codigo se le debe indicar con la palabra reservada break , esta palabra termina la ejecucuion dentro del operador switch  
4) La sitaxys es igual a la del if pero con la palabra switch . switch () {}.  

*/

const dia = 2 // 0: Domingo

switch(dia) {
    case 0:
        console.log('Hoy es Domingo')
        break
    case 1:
        console.log('Hoy es Lunes')
        break
    case 2:
        console.log('Hoy es Martes')
        break    
    case 3:
        console.log('Hoy no es Domigo, Lunes o Martes')
        break
    }










