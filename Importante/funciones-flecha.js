//FUNCION CLASICA - HOISTING
function saludar(nombre){
    return 'Hola '+ nombre;
}
console.log(saludar('Christian'));

//FUNCION ANONIMA - NO HOISTING
let saludo = function(nombre){
    return 'Un saludo para '+ nombre;
}
console.log(saludo('Christian'));

//FUNCION FLECHA () => {}
let saludo2 = (nombre) => {'Un saludo para '};

let suma = (a,b) => {
    return respuesta = `El resultado de la Suma de ${a} y ${b} es: ${a + b}`
};

console.log(suma(2,3)); 

//obj siempre embuelto en parentesis 
let obj = () => ({nombre: 'Christian', edad: 23});

let sal = nombre => {
    return saludo = `Hola ${nombre}`;
}

console.log(sal("Daniel"));