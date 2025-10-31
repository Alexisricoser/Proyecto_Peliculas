// localstorage.js
// -------------------------------------------------------------
// Sincroniza las películas con el almacenamiento local del navegador
// sin modificar la lógica principal del archivo peliculas.js
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // ⬇️ Cargar películas desde localStorage al iniciar
    const guardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    const nextIdGuardado = parseInt(localStorage.getItem('nextId')) || 1;

    if (typeof peliculas !== 'undefined') {
        peliculas = guardadas;
        nextId = nextIdGuardado;
    }

    // Volvemos a renderizar el catálogo una vez cargadas
    if (typeof renderizarCatalogo === 'function') {
        renderizarCatalogo();
    }

    // 🧩 Interceptar las funciones globales para guardar automáticamente
    const guardar = () => {
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
        localStorage.setItem('nextId', nextId.toString());
    };

    // Guardar cada vez que se modifica el catálogo
    const originalAgregar = window.agregarPelicula;
    const originalActualizar = window.actualizarPelicula;
    const originalEliminar = window.eliminarPelicula;

    if (originalAgregar) {
        window.agregarPelicula = function(datos) {
            originalAgregar(datos);
            guardar();
        };
    }

    if (originalActualizar) {
        window.actualizarPelicula = function(id, datos) {
            originalActualizar(id, datos);
            guardar();
        };
    }

    if (originalEliminar) {
        window.eliminarPelicula = function(id) {
            originalEliminar(id);
            guardar();
        };
    }

    // 🗑️ Limpieza opcional: si borras todo el catálogo manualmente
    // puedes ejecutar en consola localStorage.clear()
});
