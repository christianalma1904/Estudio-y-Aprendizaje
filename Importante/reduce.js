//1.
const numeros = [3, 10, 20, 50];
const acumular = (acumulador, numero) => acumulador + numero;

let total = numeros.reduce(acumular,0);//Se inicializa en 0

console.log(`la suma total de '${numeros}' es igual a ${total}`);

//2.
const numeros1 = [3, 10, 20, 50];
const acumularDobles = (acumulador, numero) => [...acumulador, numero * 2];

const dobles = numeros1.reduce(acumularDobles, []);

console.log(dobles);