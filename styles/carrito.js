
const verCarrito = document.getElementById("verCarrito");
// funciona el capturador de eventos sobre el emoji carrito
verCarrito.addEventListener ("click", ()=>{
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
        `;

        modalContainer.append(carritoContent);
    })

    const total= carrito.reduce((acc, el)=> acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className="total-content";
    totalBuying.innerHTML=`total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

});