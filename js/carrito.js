const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


console.log(carrito);
let tabla = document.getElementById("tabla");


const vaciarCarrito = () => {
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
};

const actualizarCarrito = () => {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    carrito.forEach(element => {
        tabla.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td>$${element.precio}</td>
        </tr>
        `;
    });
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("monto");
    infoTotal.innerText = "Total a pagar $: " + totalCarrito;
};

actualizarCarrito();

const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);