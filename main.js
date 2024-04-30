
//tienda de pc

function DatosNecesarios() {
    const nombre = prompt("Ingrese su nombre:");
    if (!nombre || !isNaN(nombre)) {
        console.log("Ingrese un nombre correctamente.");
        return;
    }

    const FiltroProductos = prompt("Ingrese si tiene computadora o portatil:");
    if (!FiltroProductos || !isNaN(FiltroProductos)) {
        console.log("Ingrese lo solicitado");
        return;
    }

    const Componentes = parseInt(prompt("Ingrese el numero correspondiente a lo que esta buscando:\n1. Procesador\n2. Memoria Ram\n3. Placa de Video\n4. Placa Madre \n5. Disco Duro \n6. Disco Rigido"));

    if (Componentes < 1 || Componentes > 6) {
        console.log("Seleccione un número válido de la lista.");
        return;
    }

    const ValorProductos = parseFloat(prompt("Ingrese el valor del respectivo producto que eligio:"));
    if (isNaN(ValorProductos) || ValorProductos <= 0) {
        console.log("Ingrese un valor razonable");
        return;
    }

    const ProductosSolicitados = parseInt(prompt("Ingrese la cantidad que necesita:"));
    if (isNaN(ProductosSolicitados) || ProductosSolicitados <= 0) {
        console.log("Ingrese una cantidad real");
        return;
    }

    const EnvioDomicilio = parseFloat(prompt("Ingrese el valor del envio a domicilio:"));
    if (isNaN(EnvioDomicilio) || EnvioDomicilio < 0) {
        console.log("Ingrese un valor realista");
        return;
    }

    const EnvioSucursal = parseFloat(prompt("Ingrese el valor del envio a la sucursal:"));
    if (isNaN(EnvioSucursal) || EnvioSucursal < 0) {
        console.log("Ingrese un valor numeral");
        return;
    }

    const CostoSeguro = parseFloat(prompt("Ingrese el valor del seguro de su producto:"));
    if (isNaN(CostoSeguro) ||CostoSeguro < 0) {
        console.log("Ingrese un valor razonable.");
        return;
    }

    const ValorComponentes. = calcularPresupuesto(nombre, FiltroProductos, ValorProductos, ProductosSolicitados, EnvioDomicilio, EnvioSucursal, CostoSeguro, Componentes);
    console.log(`Hola, ${nombre} El valor total de su compra es: $${ValorComponentes.toFixed(2)}`);
    alert(`Hola, ${nombre} El valor total de su compra es: $${ValorComponentes.toFixed(2)}`);
}
function calcularPresupuesto( nombre, FiltroProductos, ValorProductos, ProductosSolicitados, EnvioDomicilio, EnvioSucursal, CostoSeguro, Componentes) {
    let costoTotal = ValorProductos * ProductosSolicitados;

    switch (Componentes) {
        case 1: 
            costoTotal += EnvioDomicilio * 2;
            break;
        case 2: 
        case 3: 
        case 4:
        case 5:    
        case 6:
            costoTotal += EnvioDomicilio;
            break;
        default:
            console.log("Producto no agregado");
            return 0;
    }

    costoTotal += (EnvioSucursal * ProductosSolicitados) + CostoSeguro;

    return costoTotal;
}
DatosNecesarios();
