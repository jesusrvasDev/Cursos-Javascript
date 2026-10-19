
const regresaTrue= ()=>{
    console.log('La funcion regresa true')
    return true
}

const regresaFalse= ()=>{
    console.log('La funcion regresa false')
    return false
}


/*----Operdador And (&&)---- */
console.warn('And:', '&' )

// Negacion del operadores (!) cambia de true a false o viceversa.

console.log(true  && true) // regresa 1, con un solo &, si coloco && regresa verdadero   
console.log(true  && false) // regresa 0, con un solo &, si coloco && regresa falso 
console.log(false && true) // regresa 0, con un solo &, si coloco && regresa falso 
console.log(false && false) // regresa 0 con un solo &, si coloco && regresa falso

/* El codigo se ejecuta de arriba hacia abajo y de izquierda a derecha, por eso el oreden en que se coloquen las condiciones importa */

console.log(regresaTrue() && regresaFalse())   // Regresa 0 con un solo &, regresa el false que retorna la funcion usando &&, es el ultimo valor de la expresion.
regresaTrue() && regresaFalse()   // Regresa 0 con un solo &, la fincion regres false usando &&  
console.log(regresaFalse() && regresaTrue())   // Regresa false , por que al encontra falso ya no continua, para seguir ejecutando debe ser verdadero, hasta que consiga el primer falso

/* =========================================================*/

/*----Operdador OR (||)---- */
console.warn('OR:', '||' )

console.log(true  || true)      // regresa true
console.log(true  || false)     // regresa true
console.log(false || true)      // regresa true
console.log(false || false)     // regresa false

console.log(regresaTrue() || regresaFalse())   // Regresa 1 con un solo |, regresa el true que retorna la funcion de la primera expresion usando ||, ya que sin importar que resltado (true, false) resulte la expresion dos y al evaluar con la primera expresion en true , toda la expresion sera true

console.log(regresaFalse() || regresaTrue())   // Regresa 1 con un solo |, regresa el true que resulta de evaluar la expresion completa, ya que al ser un OR no interrumpe pa ejecucion a la espera de la proxima expresion 


