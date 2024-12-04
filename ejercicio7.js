
const doctores = [
    { id: 1, nombre: 'Dra. Galindo', especialidad: 'Doctora general' },
    { id: 2, nombre: 'Dr. Orozco', especialidad: 'Odontologo'}
    ];
    let citas = [];
    function agendarCita(paciente, doctorId, fecha, hora) {
        const doctor = doctores.find(d => d.id === doctorId);
        if (!doctor) {
            return 'Doctor no encontrado';
        }
        if (citaExiste(fecha, hora, doctorId)) {
            return 'Horario no disponible';
        }
        const nuevaCita = {
            id: citas.length + 1,
            paciente,
            doctor: doctor.nombre,
            fecha,
            hora
        };
        citas.push(nuevaCita);
        return `Cita agendada para ${paciente} con ${doctor.nombre}`;
    }
    function citaExiste(fecha, hora, doctorId) {
        return citas.some(c => c.fecha === fecha && c.hora === hora && doctores.find(d => d.nombre === c.doctor)?.id === doctorId);
    }
    function verCitasPaciente(paciente) {
        return citas.filter(c => c.paciente === paciente);
    }
    function cancelarCita(citaId) {
        const index = citas.findIndex(c => c.id === citaId);
        if (index === -1) return 'Cita no encontrada';
        citas.splice(index, 1);
        return 'Cita cancelada exitosamente';
    }
        
    // Ejemplo de uso
    console.log(agendarCita('Ana López', 1, '2024-11-28','09:00'));
    console.log(verCitasPaciente('Ana López'));
    console.log(cancelarCita(1));