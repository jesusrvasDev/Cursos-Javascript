const mis_proyectos=['jesus-app','Curso de Visualizaciones con Python','Curso de Ingenieria de datos con Python','Curso de QA Enginer','Curso de nodejs']
console.log(mis_proyectos.length)
const proyectos_python=mis_proyectos.filter(function(proyc){
return proyc.includes("Python");
})
console.log(proyectos_python)