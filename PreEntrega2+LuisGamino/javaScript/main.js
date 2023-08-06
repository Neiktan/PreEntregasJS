
function inventario(nombre, precio, categoria, id){
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.id = id
}

const producto1 = new inventario("alitas", 10, "pollo", 0)
const producto2 = new inventario("hamburguesa", 10, "carne", 1)
const producto3 = new inventario("bebida", 6, "soda", 2)
const producto4 = new inventario("helado,", 3, "nieve", 3)
const producto5 = new inventario("pizza", 15, "maza", 4)


const productos = []

productos.push(producto1, producto2, producto3, producto4, producto5)
console.log(productos)

const productosOrdenados = productos.slice().sort(( a, b ) => {
    if (a.nombre > b.nombre){
        return 1;
    }else if (a.nombre < b.nombre){
        return -1;
    }else
    return 0;
})

console.log(productosOrdenados)

//poner alerta de menu


const hola = prompt("Que comida deseas ordenar?")
    if(hola == productos){
        console.log = true
    }else{
        console.log = false
    }