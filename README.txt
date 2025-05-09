# ✂️ Simulador de Turnos - Peluquería "Tu Estilo"

## 🧾 Descripción General
Este proyecto es el **Simulador de Turnos - Peluquería "Tu Estilo"**, desarrollado como parte del Proyecto Final del curso de JavaScript en Coderhouse. 
El objetivo principal es permitir a los usuarios **reservar turnos en la peluquería** de manera interactiva y visual, cumpliendo con los requisitos establecidos.

## ⚙️ Funcionalidades
- **Carga de turnos desde un archivo JSON** al iniciar la aplicación.
- **Formulario interactivo** para ingresar nombre, servicio y horario.
- **Validación de duplicidad de turnos:** no permite registrar el mismo horario más de una vez.
- **Listado de turnos con estado:** muestra si el horario está **Disponible** o **No disponible**.
- **Notificación de éxito** al registrar el turno.
- **Guardado en localStorage** para mantener los datos entre sesiones.
- **Responsive Design:** estilo inspirado en interfaz de macOS.

## 🗂️ Estructura del Proyecto
```
ProyectoFinalAlmoniga/
├── index.html        # Página principal
├── css/
│   └── style.css     # Estilos visuales del simulador
├── js/
│   ├── script.js     # Lógica del simulador en JavaScript
│   └── utils.js      # Carga de turnos desde JSON
├── data/
│   └── horarios.json # Archivo con turnos iniciales (simulación de API)
└── README.txt        # Explicación del proyecto
```

## 🛠️ Herramientas Utilizadas
- **HTML5:** Estructura y maquetación.
- **CSS3:** Estilo visual y diseño responsivo.
- **JavaScript:** Lógica de negocio, manipulación del DOM y eventos.
- **Fetch API:** Carga asíncrona de datos desde el archivo JSON.
- **LocalStorage:** Guardado persistente de los turnos reservados.

## 🚧 Estado del Proyecto
✅ Proyecto completo y funcional.  
- Cumple con los objetivos del Proyecto Final.  
- Implementa asincronismo y carga de datos externa.  
- Generación de contenido HTML desde JS.  
- Código modular y organizado.  
- Pruebas realizadas en entornos locales con Visual Studio Code + Live Server.  

## 👨‍💻 Autor
Cristian Almóniga  
Curso JavaScript - Coderhouse  
Año: 2025