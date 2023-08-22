console.log(productos)

const containerCards = document.querySelector(".container-cards")

const hacerCards = array => {
    const cards = array.reduce(( acc, element )=> {
        return acc + `
            <div class="card" id="card-${element.id}"> 
                <h2>
                ${element.producto} 
                </h2>
                <figure class="imagenes">
                <img src=${element.imagen || "images/noImagen.jpg"} alt="a">
                <p>${element.descripcion || "Informacion proximamente...."}</p>
                <p>Precio: <b>$${element.precio}</b> dolares</p>
                </figure>
                <button class="button-card" id="button-${element.id}">
                    agregar al carrito
                </button>
            </div>
        `
    },"")
    containerCards.innerHTML = cards
}

hacerCards(productos)


let carrito = []


const todasCards = document.querySelectorAll(".button-card")



const eventoCards = (nodos, array) => {

    for (let i = 0; i < nodos.length; i++){

        nodos[i].onclick = (e) => {
            const id = e.currentTarget.id.slice(7)
            const buscarProducto = array.find(element => element.id === Number(id))
            carrito.push(buscarProducto)
            localStorage.setItem("productos", JSON.stringify(carrito))
        }
    }
}

eventoCards(todasCards, productos)


//TAMBIEN ME FUNCIONO ANTERIORMENTE PERO USE .BODY.APPENDCHILD
//let container = document.createElement("article")
//container.classList.add("productos-container");
//for (let producto of productos)
    //container.innerHTML += `
                        //<card class="cartas"> 
                            //<h2 class="titulo">${producto.producto} </h2>
                            //<img src=${producto.imagen}>
                            //<p>${producto.descripcion} </p>
                            //<p>Precio:  <b>$${producto.precio} dolares </b></p>
                            //<button id="boton"> agregar al carro</button>
                        //</card>`

    //document.body.appendChild(container);