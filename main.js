

//SEGUNDA PRE-ENTREGA

function addOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const prod = document.getElementById('prod').value;
    const envio = document.getElementById('envio');
    const masenvio = envio.checked;

    let price;
    let orderDescription;

    switch (prod) {
        case 'Teclado Shiva Redragon':
            price = 68200;
            orderDescription = 'Teclado Shiva Redragon';
            break;
        case 'Joystick Ps5':
            price = 83000;
            orderDescription = 'Joystick Ps5';
            break;
        case 'Mause G450':
            price = 16700;
            orderDescription = 'Mause G450';
            break;
        case 'Rtx 4080 ti 24gb':
            price = 1300000;
            orderDescription = 'Rtx 4080 ti 24gb';
            break;
        case 'Rx 6500 xt 4gb':
            price = 460000;
            orderDescription = 'Rx 6500 xt 4gb';
            break;
        case 'Ps5':
            price = 1120000;
            orderDescription = 'Ps5';
            break;
        default:
            price = 0;
            orderDescription = 'vacio';
            break;
    }

    if (masenvio) {
        price += 4799;
        orderDescription += ' Más envio';
    }

    const orderItem = `${orderDescription} - $${price}`;

    const producto = document.getElementById('producto');
    const listItem = document.createElement('li');
    listItem.textContent = orderItem;
    producto.appendChild(listItem);
}


function submitOrder() {
    // Obtener lista de pedidos
    const orderListItems = document.getElementById('producto').getElementsByTagName('li');
    const orders = [];

    for (let i = 0; i < orderListItems.length; i++) {
        const orderText = orderListItems[i].textContent.trim();
        const [description, priceStr] = orderText.split(' - $');
        const price = parseFloat(priceStr);
        orders.push({ description, price });
    }


    localStorage.setItem('orders', JSON.stringify(orders));

    const orderListElement = document.getElementById('orderList');
    orderListElement.innerHTML = '';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('prod').selectedIndex = 0;
    document.getElementById('envio').checked = false;

    alert(' Compra realizada, le enviamos un gmail');
}




























// PRIMERA PRE-ENTREGA

 //function DatosNecesarios() {
 //   const nombre = prompt("Ingrese su nombre:");
  //  if (!nombre || !isNaN(nombre)) {
   //     console.log("Ingrese un nombre correctamente.");
    //    return;
    //}

   // const FiltroProductos = prompt("Ingrese si tiene computadora o portatil:");
   // if (!FiltroProductos || !isNaN(FiltroProductos)) {
   //     console.log("Ingrese lo solicitado");
   //     return;
   // }

   // const Componentes = parseInt(prompt("Ingrese el numero correspondiente a lo que esta buscando:\n1. Procesador\n2. Memoria Ram\n3. Placa de Video\n4. Placa Madre \n5. Disco Duro \n6. Disco Rigido"));

   // if (Componentes < 1 || Componentes > 6) {
   //     console.log("Seleccione un número válido de la lista.");
   //     return;
   // }

  //  const ValorProductos = parseFloat(prompt("Ingrese el valor del respectivo producto que eligio:"));
    //if (isNaN(ValorProductos) || ValorProductos <= 0) {
     //   console.log("Ingrese un valor razonable");
     //   return;
   // }

   // const ProductosSolicitados = parseInt(prompt("Ingrese la cantidad que necesita:"));
   // if (isNaN(ProductosSolicitados) || ProductosSolicitados <= 0) {
   //     console.log("Ingrese una cantidad real");
   //     return;
   // }

  //  const EnvioDomicilio = parseFloat(prompt("Ingrese el valor del envio a domicilio:"));
   // if (isNaN(EnvioDomicilio) || EnvioDomicilio < 0) {
   //     console.log("Ingrese un valor realista");
   //     return;
  //  }

  //  const EnvioSucursal = parseFloat(prompt("Ingrese el valor del envio a la sucursal:"));
  //  if (isNaN(EnvioSucursal) || EnvioSucursal < 0) {
   //     console.log("Ingrese un valor numeral");
   //     return;
   // }

  //  const CostoSeguro = parseFloat(prompt("Ingrese el valor del seguro de su producto:"));
  //  if (isNaN(CostoSeguro) ||CostoSeguro < 0) {
  //      console.log("Ingrese un valor razonable.");
   //     return;
   // }

  //  const ValorComponentes = calcularPresupuesto(nombre, FiltroProductos, ValorProductos, ProductosSolicitados, EnvioDomicilio, EnvioSucursal, CostoSeguro, Componentes);
 //   console.log(`Hola, ${nombre} El valor total de su compra es: $${ValorComponentes.toFixed(2)}`);
 //   alert(`Hola, ${nombre} El valor total de su compra es: $${ValorComponentes.toFixed(2)}`);
//}
//function calcularPresupuesto( nombre, FiltroProductos, ValorProductos, ProductosSolicitados, EnvioDomicilio, EnvioSucursal, CostoSeguro, Componentes) {
   // let costoTotal = ValorProductos * ProductosSolicitados;

   // switch (Componentes) {
   //     case 1: 
   //         costoTotal += EnvioDomicilio * 2;
   //         break;
   //     case 2: 
   //     case 3: 
   //     case 4:
   //     case 5:    
   //     case 6:
  //          costoTotal += EnvioDomicilio;
  //          break;
  //      default:
  //          console.log("Producto no agregado");
 //           return 0;
 //   }

//    costoTotal += (EnvioSucursal * ProductosSolicitados) + CostoSeguro;

//    return costoTotal;
//}
//DatosNecesarios();
