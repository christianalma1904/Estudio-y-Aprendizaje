//MAP
//1.
const nums = [1,2,3,4,5]

const doble = nums.map(function(num){
    return num * 2
});
console.log(nums);
console.log(doble);


//2.
const productos = [
    {id: '001', nombre: 'camiseta', precio: 5},
    {id: '002', nombre: 'zapatillas', precio: 20},
    {id: '003', nombre: 'pantalon', precio: 15},
    ];
    
const productosDescuento = productos.map(function(producto){
    if(producto.precio < 10) return producto;
    
    return {
        ...producto,
        precio: producto.precio * 0.9
    }
});

console.log(productos);
console.log(productosDescuento);

//3. Extraer Datos de un Objeto
const productos1 = [
    {id: '1', producto: 'camiseta', precio: 5},
    {id: '2', producto: 'zapatillas', precio: 40},
    {id: '3', producto: 'pantalon', precio: 25}];

const idProductos = productos1.map(({id}) => id);
console.log(idProductos);