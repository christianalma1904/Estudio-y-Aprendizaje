const productos = [
    {id: '1', producto: 'camiseta', precio: 5},
    {id: '2', producto: 'zapatillas', precio: 40},
    {id: '3', producto: 'pantalon', precio: 25}];

const esBarato = producto => producto.precio < 10;
const productoBarato = productos.filter(esBarato);