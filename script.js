// Función para mostrar modales
function showModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

// Función para ocultar modales
function hideModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

// Botón de Ayuda
document.getElementById("btn-ayuda").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log("Ubicación enviada:", position.coords);
            showModal("modal-ayuda");
            setTimeout(() => hideModal("modal-ayuda"), 3000); // Cierra automáticamente en 3s
        },
        (error) => {
            alert("Error al obtener la ubicación: " + error.message);
        }
    );
});

// Botón Reportar
document.getElementById("btn-reportar").addEventListener("click", () => {
    showModal("modal-reportar");
});

// Botón Cerrar Reportes
document.getElementById("btn-cerrar-reportes").addEventListener("click", () => {
    hideModal("modal-ver-reportes");
});

// Envío del Formulario
document.getElementById("form-reportar").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const direccion = document.getElementById("direccion").value;
    const descripcion = document.getElementById("descripcion").value;

    const reporteId = Math.floor(10000 + Math.random() * 90000); // Generar ID único
    const listaReportes = document.getElementById("lista-reportes");

    // Guardar el reporte en la lista
    const reporteItem = document.createElement("li");
    reporteItem.textContent = `ID: ${reporteId} - ${nombre}, ${descripcion} (${direccion})`;
    listaReportes.appendChild(reporteItem);

    // Mostrar mensaje de éxito
    showModal("modal-exito");
    setTimeout(() => hideModal("modal-exito"), 2000); // Cierra automáticamente en 2s

    // Resetear el formulario y cerrar modal
    document.getElementById("form-reportar").reset();
    hideModal("modal-reportar");
});

// Botón Ver Reportes
document.getElementById("btn-ver-reportes").addEventListener("click", () => {
    showModal("modal-ver-reportes");
});
