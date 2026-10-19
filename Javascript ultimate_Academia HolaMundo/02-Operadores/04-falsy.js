// SHORT-CIRCUIT 

/* valores que retornan valor "false"

/*
Los falsy son valores que al evaluarlos por medio de una expresión boolean siempre arrojan resultado "false"

false
0
''
null
undefined
NaN
*/

usuario= '';
nombre= usuario || 'anónimo';  /* Evalúa  las dos condiciones, si  el valor de la primera condición es no vacio, es decir, usuario='jesusrvas' ,entonces el resultado de 
evaluar es "true" y  valor de nombre será "jesusrvas".Si por el contrario el usuario esta vacio por ejemplo,'',la primera condición seria un falsy,'falso', lo que hace la condición 2 verdadera, por lo que el valor de nombre sera "anónimo" Toma el valor del primer verdadero 
*/

console.log('Resultado de usar el operador OR:',nombre); 


nombre2= usuario && 'anónimo';
console.log(nombre2);

function funtion1 () {
    console.log('Soy funcion 1');
    return true; 
};


function funtion2(){
    console.log('Soy funcion 2')
    return true;
};

let nombre3= funtion1() && funtion2();

console.log(nombre3); 