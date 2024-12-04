// Lista de estudiantes
const estudiantes = [
    {nombre: "Maria", nota: 8.0},
    {nombre: "Brandon", nota: 9.5},
    {nombre: "Sebastian", nota: 7.0},
    {nombre: "Paula", nota: 9.8},
    {nombre: "Luisa", nota: 6.2}
    ];
// Filtrar aprobados
const aprobados = estudiantes    
.filter(estudiante => estudiante.nota >= 7)
.map(estudiante => estudiante.nombre);
console.log("Estudiantes aprobados:", aprobados);