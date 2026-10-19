/*NOTAS: 
1) Mantiente la misma estrura en la sintaxys que if, switch es decir: while () {}
2) Se ejecuta siempre y cuando la condicion evaluada sea verdadera, si cambia sale del bloque de ejecucion del codigo
3)undife,null y false como condicion a evaluar por el while son considerados falsos y no ejecuta el bloquede codigo
*/ 

console.warn('Ciclo while:')

const carros=['Ford','Mazda','Nissan','Toyota']
console.log(carros)
let i=0  // variable contador 
while(i<carros.length){ // Tambien es valido colocar ,carros[i],en la expr a evaluar
    console.log(carros[i]);
    i++     // Sin este contador no se incrementa el contador y por lo tanto se cae en un cliclo infinito
}

console.warn('Otra forma de evaluar la expresion en el while, carros[i], para cada i que exista en el arreglo carros')
// Se evalua estas condiciones para cada carros[i], como son verdader se ejecuta el pbloque de codigo, cuando pasa de i>3 ya las condicones son falsas 
console.log('carros[0]===Ford, resulta:', carros[0]==='Ford')
console.log('carros[1]===Mazda, resulta:',carros[1]==='Mazda')
console.log('carros[2]===Nissan, resulta:',carros[2]==='Nissan')
console.log('carros[3]===Toyota, resulta:', carros[3]==='Toyota')

console.warn('Do while')

/*
La diferencia con el while anteror es que siempre se va a ejecutar el bloque de codigo de Do , el otro bloque de codigo del while es igual que la version anterior
*/

let j=0

do{
    console.log(carros[j])
    j++
} while(j<carros.length){
    console.log(carros[j]);   // Ojo pendienten: entendi por que imprime undefined al final de impromir todo el arreglo, pero no se como evitar que imprima ese undefined
}


