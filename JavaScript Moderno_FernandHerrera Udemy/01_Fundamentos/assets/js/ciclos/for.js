console.warn('Ciclo For tradicional')

const heroes=['Batman','Superman','Spiderman','Aquaman','Linterna verde']

for(let i=0  ; i<heroes.length  ; i++ ){
    console.log(heroes[i]);
}


console.warn('Ciclo For in')

for (heroe in heroes) {
    console.log(heroes[heroe]);
}