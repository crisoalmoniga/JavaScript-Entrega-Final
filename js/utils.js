// Función para cargar los turnos desde el JSON
async function cargarTurnosDesdeJSON() {
    try {
        const response = await fetch('data/horarios.json');
        if (!response.ok) throw new Error('Error al cargar los datos');
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error al cargar turnos:', error.message);
        return [];
    }
}
