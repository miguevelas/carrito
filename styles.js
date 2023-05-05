const shopContent = document.getElementById("shopContent");





let carrito=[];

productos.forEach((fruta)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `<img src="${fruta.img}">
    <h3${fruta.nombre}</h3>
    <p class="price">${fruta.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

// funciones para boton comprar
    comprar.addEventListener("click", ()=>{

        const repeat= carrito.some((repeatProduct)=> repeatProduct.id === fruta.id);
// si hay dos proctos iguales, que recorra el carrito, que detecte el id, y si es igual a frutaid, (tomarlo y sumarle uno ++)
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === fruta.id){
                    prod.cantidad++;
                }
            })
        } else{
        carrito.push({
            id: fruta.id,
            img: fruta.img,
            nombre: fruta.nombre,
            precio: fruta.precio,
            cantidad: fruta.cantidad,
        });
    }
        console.log(carrito);
    })
});

const modalContainer = document.getElementById("modal-container");




