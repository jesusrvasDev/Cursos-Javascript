function pitagoras (a,b) {      // a y b en la declación de la función se llama parametros
    console.log(arguments);     /*Con la palabra reservada argumets,
                                  se puede ver en consola un arrays con los argumentos
                                  que se le han pasado a funcion*/ 
                                          
    return a+b
    
};
console.log(pitagoras(3,20));                // 3 y 20 cuando se llama a la función se le llama argumentos

console.log(typeof pitagoras);

/*DIFERENCIA ENTRE DECLARACIONES Y EXPRESIONES EN JAVA SCRIPT
 Cada lenguaje utiliza las declaraciones y expresiones de manera particular según sea la sintaxis de su lenguaje,
 sin embargo, existen algunos conceptos que pueden ser comunes en todos los lenguajes, veamos las diferencias 
 para Java Script: 

 Si se traduce del ingles  "declaration" al español, significa "Declaración"
 Si se traduce del ingles  "declaration" al español, támbien significa "Declaración"
 aunque ambas significan Declaración , se usan en situaciones distintas, "declaration" cuando
 es de forma oral y "Statemeats" cuando es declaración oral. .
  
 Algo parecido ocurre en Java Script, 
 
 Sera Decraration , las palabras reservadas; let, const, funtion, async funtion, class, export/import
 Sera Statemeats, las palabras reservadas: if, for, else, switch ...

 Sera Expression, cuando una linea de código deriva en una expresión , como : 
 return 2+2;
 X=2;
 consoe.log(X);
 miFuntion()
 
 Si se tiene resultado inmediato es una expresión
 */



