let a = 10;

// COMPARACIONES DE RELACIÓN

console.log('a=10;','El valor de "a" es el número',a, '. es decir, tipo de dato integer');
console.log('Veamos el resultado de comparar las propocisiones con el valor de "a", el resultado es un tipo de dato Boolean');
console.log('COMPARACIÓN DE RELACIÓN');
console.log('1) ¿a>5?', a > 5,'Verdadero');  // A la afirmación a>5 responde "true"
console.log('2) ¿a>=5?',a >= 5,'Verdadero');  // A la afirmación a>=5 responde "true"  
console.log('3) ¿a<15?', a < 15,'Verdadero');  // A la afirmación  a < 5 responde "true"

// COMPARACIONES DE IGUALDAD
console.log('COMPARACIONES DE IGUALDAD. SIN TOMAR EL CUENTA EL TIPO DE DATO')

console.log('1) "a=5 (integer)", ES exactamente igual a 5 (integer); ',a == 5,' ;La respuesta es falso');  // A la afirmación a==5 (a exantamente igual a 5) responde "false"
console.log('2) "a=5 (integer), NO es exactamente igual a 5 (interger)',  a !=5,'La respuesta es verdadero');   // A la afirmación a¡=5 (a es distinto de 5) responde "true"
console.log('3) "a=10 (integer), ES exactamente igual a 10 (String)', a=='10', ';La respuesta es verdadero, ya que la comparación no toma en cuenta el tipo de dato, compara valores, caracteres')  // A la afirmación a=='10' (a es exactamente igual al string 10) la respuesta es "true". ya que compara el valor sin importar el tipo de dato.

// COMPARACIONES DE IGUALDAD , CONSIDERANDO LOS TIPOS DE DATOS 

console.log('COMPARACIÓN DE IGUALDAD CONSIDERANDO LOS TIPOS DE DATOS');

console.log('¿El valor de "a", es exactamente igual a 10 (tipo de dato string)?',a ==='10', '; La respuesta es falso por que los tipós de datos son distintos')  // A la afirmación a=== '10' (a es exactamanete igual al string 10) la respuesta es "false", ya que los tipos de datos no son iguales.
console.log('¿El valor de "a", es NO es exactamente igual a 10 (tipo de dato string)?',a !=='10', '; La respuesta es verdadero, por que los tipós de datos son distintos') // A la afirmación a!== '10' (a no es exactamente igual al string 10) la respuesta es "true", ya que los tipos de datos no son iguales



 