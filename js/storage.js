// localstorage.js

document.addEventListener('DOMContentLoaded', () => {
    // Recuperamos del almacenamiento local (si existe)
    const guardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    const nextIdGuardado = parseInt(localStorage.getItem('nextId')) || 1;

    // Si no hay películas guardadas, añadimos a Shrek como predeterminada
    if (guardadas.length === 0) {
        peliculas = [
            {
                id: 1,
                titulo: "Shrek",
                director: "Andrew Adamson",
                anio: "2001",
                genero: "Comedia",
                puntuacion: 5
            }
        ];
        nextId = 2;
    } else {
        peliculas = guardadas;
        nextId = nextIdGuardado;
    }

    // Renderizamos el catálogo con lo que haya cargado
    renderizarCatalogo();

    // Observamos cambios en el catálogo (añadir, editar o borrar)
    const guardarCambios = () => {
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
        localStorage.setItem('nextId', nextId.toString());
    };

    // Cada vez que se agrega, actualiza o elimina, guardamos
    const originalAgregar = agregarPelicula;
    const originalActualizar = actualizarPelicula;
    const originalEliminar = eliminarPelicula;

    agregarPelicula = function(datos) {
        originalAgregar(datos);
        guardarCambios();
    };

    actualizarPelicula = function(id, datos) {
        originalActualizar(id, datos);
        guardarCambios();
    };

    eliminarPelicula = function(id) {
        originalEliminar(id);
        guardarCambios();
    };
});
