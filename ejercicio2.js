const ventas = [
    {producto: "manzanas", categoria: "frutas", monto: 150},
    {producto: "leche", categoria: "lacteos", monto: 150},
    {producto: "peras", categoria: "frutas", monto: 150},
    {producto: "queso", categoria: "lacteos", monto: 150},
    {producto: "yogurt", categoria: "lacteos", monto: 150},
];

const ventasPorCategoria = ventas.reduce((acc, ventas) => {
acc[ventas.categoria] = (acc[ventas.categoria]|| 0) + ventas.monto;
return acc;
}, {});

console.log ("ventas por categoria", ventasPorCategoria);