const verCarrito = document.getElementById("verCarrito");
// funciona el capturador de eventos sobre el emoji carrito

// borramos eventlistener, reemplazo por otra funcion, mas adelante se lo creara nuevamente

const pintarCarrito =()=>{
    modalContainer.innerHTML="";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =`
    <h1 class="modal-header-title">Carrito </h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton =document.createElement("h1");
    modalbutton.innerText="x";
    modalbutton.className="modal-header-button";

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((fruta)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className="modal-content"
        carritoContent.innerHTML=`
            <img src="${fruta.img}">
            <h3>${fruta.nombre}</h3>
            <p>${fruta.precio}</p>
            <p>Cantidad: ${fruta.cantidad}</p>
            <p>Total: ${fruta.cantidad*fruta.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText= "❎";
        eliminar.className="delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);

    });


    const total= carrito.reduce((acc, el)=> acc + el.precio*el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className="total-content";
    totalBuying.innerHTML=`total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrtio.find((element) => element.id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    pintarCarrito();
}