// localstorage.js
// -------------------------------------------------------------
// Sincroniza las películas con el almacenamiento local del navegador
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // ⬇️ Recuperar películas guardadas
    const guardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    const nextIdGuardado = parseInt(localStorage.getItem('nextId')) || 1;

    // Esperamos a que peliculas.js haya definido las variables globales
    const esperarPeliculasListas = setInterval(() => {
        if (typeof peliculas !== 'undefined' && typeof renderizarCatalogo === 'function') {
            clearInterval(esperarPeliculasListas);

            // Cargar datos
            peliculas = guardadas;
            nextId = nextIdGuardado;

            // Renderizar catálogo solo una vez cargados los datos
            renderizarCatalogo();

            // 🧩 Guardar automáticamente cuando se modifica el catálogo
            const guardar = () => {
                localStorage.setItem('peliculas', JSON.stringify(peliculas));
                localStorage.setItem('nextId', nextId.toString());
            };

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
        }
    }, 50); // Reintenta cada 50ms hasta que peliculas.js esté listo
});
