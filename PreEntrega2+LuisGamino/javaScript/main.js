
function inventario(nombre, precio, categoria, id){
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.id = id
}

const producto1 = new inventario("alitas", 10, "pollo", 0)
const producto2 = new inventario("hamburguesa", 10, "carne", 1)
const producto3 = new inventario("bebida", 6, "soda", 2)
const producto4 = new inventario("helado", 3, "nieve", 3)
const producto5 = new inventario("pizza", 15, "maza", 4)

//function cantidades(cantidad1, cantidad2, cantidad3, cantidad4){
    //this.cantidad1 = cantidad1
    //this.cantidad2 = cantidad2
    //this.cantidad3 = cantidad3
    //this.cantidad4 = cantidad4
//}
//const cantidadAlitas = new cantidades(6, 10, 14, 18)

const productos = []  //ARRAY VACIO

productos.push(producto1, producto2, producto3, producto4, producto5)
console.log(productos)

const productosOrdenados = productos.slice().sort(( a, b ) => { //orden por el nombre del producto
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
})


const productosOrdenados2 = productos.slice().sort(( a, b ) => { //orden por el aumento de precio
    if (a.precio > b.precio){
        return 1;
    }else if (a.precio < b.precio){
        return -1;
    }else{
    return 0;
    }
})

console.log(productosOrdenados)
console.log(productosOrdenados2)



//poner alerta de menu
//let taxes = 6.25

//function sacandoTaxes(a, taxes){
//    100 / taxes
//}

//let taxdue = producto1.precio * (sacandoTaxes)

//console.log(taxdue)

//Necesito poner objetos en objetos, "sabores"
//const saborAlitas = () =>{

    //const entradaDeComida = prompt("Que sabor?")

    //productos.producto1.push({
        //sabor: entradaDeComida
    //})
//}

function categorisas(comida){
    console.log(productos.find((comida) => comida.nombre === pedido))
}

function dinero(cantidad, producto){
    return cantidad * producto
}

function id(identificador){
    console.log(`objeto id: ${identificador}`)
}


const pedido = prompt("Que comida deseas ordenar?")

    if(pedido == producto1.nombre){//alitas    
        categorisas(producto1)
        const cantidadAlitas = prompt("Que cantidad deseas?")

            if (cantidadAlitas == 6 || cantidadAlitas == 10 || cantidadAlitas == 14 || cantidadAlitas == 18){
                alert(`tu(s) ${pedido} de ${cantidadAlitas} piezas, el precio es de ${producto1.precio} dolares, gracias por su compra`)
                id(producto1.id)
            }else{
                alert("Error: Por favor de de poner la cantidad de lo que tenemos en el menu")
            }

    }else if(pedido == producto2.nombre){//hamburguesa
        categorisas(producto2)
        const cantidadHamburguesas = Number(prompt("Cuantas hamburguesas deseas"))

            if(cantidadHamburguesas <= 5){
                alert(`tu(s) ${cantidadHamburguesas} ${pedido} estaran listas pronto, sera ${dinero(cantidadHamburguesas, producto2.precio)} dolares, gracias por su compra`)
                id(producto2.id)
            }else{
                alert("Lo sientto, son demasiadas hamburguesas")
            }

    }else if(pedido == producto3.nombre){//bebida
        categorisas(producto3)
        const cantidadBebida = prompt("Cauntas bebidas deseas")

        alert(`tu(s) ${cantidadBebida} bebidas se haran pronto, serian ${dinero(cantidadBebida, producto3.precio)} dolares, gracias por su compra`)
        id(producto3.id)

    }else if(pedido == producto4.nombre){//helado
        categorisas(producto4)
        const cantidadHelado = prompt("Cuantos helados?")

        alert(`tu(s) ${cantidadHelado} ${pedido} estara lista pronto, serian ${dinero(cantidadBebida, producto4.precio)}`)
        id(producto4.id)

    }else if(pedido == producto5.nombre){//pizza
        categorisas(producto5)
        const tamanioPizza = prompt("De que tamanio? (chica, mediano, grande)")

            if(tamanioPizza == "chica" || tamanioPizza == "mediano" || tamanioPizza == "grande"){
                console.log(`pizza ${tamanioPizza}`) 

                const cantidadPizza = prompt("cantida de pizza")
                alert(`tu(s) ${cantidadPizza} pizzas ${tamanioPizza} estaran listas pronto, sera ${dinero(cantidadBebida, producto5.precio)} dolares, muchas gracias por su compra`)
                id(producto5.id)
            }

    }else{
        console.log(false)
        alert("lo siento pero no encontramos lo que deseas")
    }

