// ARRAYS; Un ejercicio planteado en la página learnjavascript

let numbers = [15,5,10]

 function sumOddNumbers(numbers) {
    let suma=0;
    numbers.forEach(function(number){
       //console.log(number);  // esta linea comentada es para ver la iteracion del array
       suma+=number;
       //console.log(suma);    // esta linea comentada es para verificar si se efectua la suma
    })
    return suma;
//console.log(suma)
}

sumOddNumbers (numbers)

console.log(sumOddNumbers(numbers))  