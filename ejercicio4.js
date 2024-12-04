// Datos del carrito
const carrito = [
    {nombre: "Laptop", precio: 800, cantidad: 1},
    {nombre: "Mouse", precio: 20, cantidad: 2},
    {nombre: "Teclado", precio: 50, cantidad: 1}
    ];
    // Función para calcular total
    const calcularTotal = (productos) => {
    return productos.reduce((total, producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return total + subtotal;
    }, 0);
    };
    // Calcular y mostrar resultado
    const total = calcularTotal(carrito);
    console.log("Productos en carrito:", carrito);
    console.log("Total a pagar: $" + total);