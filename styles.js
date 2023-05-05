const shopContent = document.getElementById("shopContent");



const productos=[
    {
        id:1,
        nombre: "naranja",
        precio: 50,
        img:"https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1"
    },
    {
        id:2,
        nombre: "manzana",
        precio: 80,
        img:"https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg"
    },
    {
        id:3,
        nombre: "frutilla",
        precio: 120,
        img:"https://img.interempresas.net/fotos/1341264.jpeg"
    },
    {
        id:4,
        nombre: "arandanos",
        precio: 50,
        img:"https://elpais.com/especiales-branded/la-despensa/2020/alimentos-con-los-que-combinar-los-arandanos-para-endulzarlos-sin-azucar/img/1586341597_210102_1586341918_noticia_normal.jpg"
    },
];

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
        carrito.push({
            id: fruta.id,
            img: fruta.img,
            nombre: fruta.nombre,
            precio: fruta.precio,
        });
        console.log(carrito);
    })
});

const modalContainer = document.getElementById("modal-container");

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


