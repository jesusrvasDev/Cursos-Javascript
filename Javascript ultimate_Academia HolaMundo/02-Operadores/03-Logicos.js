// OPERADORES LÓGICOS : AND , OR , NOT

/* OPERADOR AND (&&)
Es verdadero cuando; ambas condiciones son verdaderas o ambas condiciones son falsas 
*/
console.log('Se definen las variables:')
console.log('condicion1=verdadero y condicion2=false') 
console.log('Se evaluan los operadores lógicos,AND (&&);OR (||); NOT(!)')     
condicion1=true;
condicion2=false;

// &&
console.log('EJEMPLOS DE APLICACIÓN OPERADOR LÓGICO AND (&&)')
console.log(condicion1 && condicion1,'La respesta es verdadero'); 
console.log(condicion1 && condicion2,'La respesta es falso');
console.log(condicion2 && condicion1,'La respesta es falso');
console.log(condicion2 && condicion2,'La respesta es falso');

// OR (││)
console.log('EJEMPLOS DE APLICACIÓN OPERARDOR LÓGICO OR(||)')
console.log(condicion1 || condicion1,'La respesta es verdadero');
console.log(condicion1 || condicion2,'La respesta es verdadero');
console.log(condicion2 || condicion1,'La respesta es verdadero');
console.log(condicion2 || condicion2,'La respesta es falso');   

// NOT (!). NEGACIÓN DE UNA VARIABLE
console.log('EJEMPLOS DE OPERADOR NOT o NEGACIÓN(!)')
console.log('Se niegan las variables y se evaluan indistintamente con los operadores AND y OR')
console.log(condicion1 && !condicion2,'La respesta es verdadero');
console.log(!condicion1 || condicion2,'La respesta es falso');
console.log(condicion1 || !condicion2,'La respesta es verdadero');
console.log('La negacion de condicion1 es;',!condicion1);
console.log('La negacion de condicion2 es;',!condicion2);