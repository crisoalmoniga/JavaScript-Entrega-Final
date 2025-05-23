const form = document.getElementById('form-turno');
const listaTurnos = document.getElementById('lista-turnos');
const mensaje = document.getElementById('mensaje-confirmacion');

const HORARIOS_DISPONIBLES = [
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

let turnos = [];

// Cargar turnos desde JSON y luego renderizar
async function iniciarSimulador() {
    turnos = await cargarTurnosDesdeJSON();
    renderizarTurnos();
}

function renderizarTurnos() {
    listaTurnos.innerHTML = '';
    HORARIOS_DISPONIBLES.forEach(hora => {
        const turno = turnos.find(t => t.hora === hora);
        const li = document.createElement('li');
        if (turno) {
            li.innerText = `${hora} - No disponible (${turno.nombre} - ${turno.servicio})`;
            li.classList.add('no-disponible');
        } else {
            li.innerText = `${hora} - Disponible`;
            li.classList.add('disponible');
        }
        listaTurnos.appendChild(li);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const servicio = document.getElementById('servicio').value;
    const hora = document.getElementById('hora').value.padStart(2, '0');
    const minuto = document.getElementById('minuto').value.padStart(2, '0');
    const horaCompleta = `${hora}:${minuto}`;

    const existeTurno = turnos.some(turno => turno.hora === horaCompleta);
    if (existeTurno) {
        mostrarMensaje("⚠ Ya hay un turno reservado en ese horario. Elegí otro.");
        return;
    }

    if (nombre && servicio && hora && minuto) {
        const nuevoTurno = { nombre, servicio, hora: horaCompleta };
        turnos.push(nuevoTurno);
        renderizarTurnos();
        form.reset();
        mostrarMensaje("✅ ¡El turno fue registrado exitosamente!");
    }
});

function mostrarMensaje(texto) {
    mensaje.innerText = texto;
    mensaje.style.opacity = "1";
    setTimeout(() => {
        mensaje.style.opacity = "0";
    }, 3000);
}

iniciarSimulador();
