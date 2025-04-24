const item = {
    id: 0,
    title: 'Hola Mundo',
    complete: false,
    status:{
        complete1: true
    }
}

const{id,complete} = item;
console.log(id, complete);

const{title, ...otros} = item; 
console.log(title, otros);

const{id:number} = item;
console.log(number);

const {status:{complete1}} = item;
console.log(complete1);

const numbers = [1,2,3,4,5];
const [v1, v2, ...resto] = numbers;

console.log(v1, v2, resto);