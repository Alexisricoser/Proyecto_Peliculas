// verForm.addEventListener("click", () => {
//     contForm.hidden = false
//     Catalogo.setAttribute("hidden", "true")
// })
// verCatalogo.addEventListener("click", () => {
//     contForm.setAttribute("hidden", "true")
//     Catalogo.hidden = false
// })

let peliculas = [];
let nextId = 1; 
let peliculaEnEdicionId = null; 

const catalogoDiv = document.getElementById('Catalogo');
const contenidoPadreDiv = catalogoDiv.querySelector('.contenido') ? catalogoDiv.querySelector('.contenido').parentNode : document.createElement('div');
const contForm = document.getElementById('contForm');
const formulario = document.getElementById('formulario');
const verCatalogoBtn = document.getElementById('verCatalogo');
const verFormBtn = document.getElementById('verForm');
const formTitle = contForm.querySelector('h2');
const botonEnviar = document.getElementById('botonenviar');


const inputTitulo = document.getElementById('Titulo');
const inputDirector = document.getElementById('Director');
const inputAnio = document.getElementById('año');
const inputGenero = document.getElementById('Genero');
const selectPuntuacion = document.getElementById('Puntuacion');


function generarEstrellas(puntuacion) {
    
    const num = parseInt(puntuacion) || 0;
    return '⭐'.repeat(Math.min(5, Math.max(0, num)));
}

/**
 * Cambia la visibilidad entre el catálogo y el formulario.
 * @param {string} vista 
 */
function cambiarVista(vista) {
    if (vista === 'formulario') {
        catalogoDiv.hidden = true;
        contForm.hidden = false;
    } else {
        contForm.hidden = true;
        catalogoDiv.hidden = false;
    }
}



/**
 * Crea el HTML de una sola película.
 * @param {object} pelicula - Objeto de la película.
 * @returns {HTMLElement} El div de la película.
 */
function crearPeliculaElemento(pelicula) {
    const peliculaHTML = document.createElement('div');
    peliculaHTML.classList.add('contenido');
    peliculaHTML.setAttribute('data-id', pelicula.id);

    peliculaHTML.innerHTML = `
        <h2>Título: ${pelicula.titulo}</h2>
        <p>Director: ${pelicula.director}</p>
        <p>Año de estreno: ${pelicula.anio}</p>
        <p>Género: ${pelicula.genero}</p>
        <p>Valoración: ${generarEstrellas(pelicula.puntuacion)}</p>
        <button class="Editar" data-id="${pelicula.id}">Editar</button>
        <button class="Borrar" data-id="${pelicula.id}">Borrar</button>
    `;

    return peliculaHTML;
}


function renderizarCatalogo() {
    
    let contenidoActual = contenidoPadreDiv.querySelectorAll('.contenido');
    contenidoActual.forEach(el => el.remove());

    
    peliculas.forEach(pelicula => {
        const elemento = crearPeliculaElemento(pelicula);
        contenidoPadreDiv.appendChild(elemento);
    });

    
    document.querySelector('.contadorCatalogo').textContent = `Número de películas/series: ${peliculas.length}`;

    
    adjuntarListeners();
}


function adjuntarListeners() {
    
    document.querySelectorAll('.Borrar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            if (confirm('¿Estás seguro de que quieres eliminar esta película?')) {
                eliminarPelicula(id);
            }
        });
    });

    
    document.querySelectorAll('.Editar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            iniciarEdicion(id);
        });
    });
}



/**
 * Añade una nueva película al array y actualiza el DOM.
 * @param {object} datos - Datos del formulario.
 */
function agregarPelicula(datos) {
    const nuevaPelicula = {
        id: nextId++,
        titulo: datos.Titulo,
        director: datos.Director,
        anio: datos.año,
        genero: datos.Genero,
        puntuacion: parseInt(datos.Puntuacion)
    };
    peliculas.push(nuevaPelicula);
    renderizarCatalogo();
    cambiarVista('catalogo');
    formulario.reset();
    alert(`"${nuevaPelicula.titulo}" ha sido añadida.`);
}

/**
 * Actualiza una película existente en el array y en el DOM.
 * @param {number} id - El ID de la película a actualizar.
 * @param {object} nuevosDatos - Los datos actualizados del formulario.
 */
function actualizarPelicula(id, nuevosDatos) {
    const indice = peliculas.findIndex(p => p.id === id);

    if (indice !== -1) {
        peliculas[indice] = {
            id: id,
            titulo: nuevosDatos.Titulo,
            director: nuevosDatos.Director,
            anio: nuevosDatos.año,
            genero: nuevosDatos.Genero,
            puntuacion: parseInt(nuevosDatos.Puntuacion)
        };
        renderizarCatalogo();
        cambiarVista('catalogo');
        
        peliculaEnEdicionId = null;
        formulario.reset();
        formTitle.textContent = 'Añadir pelicula';
        botonEnviar.textContent = 'Añadir al catálogo';
        alert(`Película actualizada.`);
    }
}

/**
 * Elimina una película del array y actualiza el DOM.
 * @param {number} id - El ID de la película a eliminar.
 */
function eliminarPelicula(id) {
    peliculas = peliculas.filter(pelicula => pelicula.id !== id);
    renderizarCatalogo();
}

/**
 * Prepara el formulario para editar una película.
 * @param {number} id - El ID de la película a editar.
 */
function iniciarEdicion(id) {
    const pelicula = peliculas.find(p => p.id === id);
    if (!pelicula) return;

    
    peliculaEnEdicionId = id;

    
    inputTitulo.value = pelicula.titulo;
    inputDirector.value = pelicula.director;
    inputAnio.value = pelicula.anio;
    inputGenero.value = pelicula.genero;
    selectPuntuacion.value = pelicula.puntuacion; 

    
    formTitle.textContent = `Editar: ${pelicula.titulo}`;
    botonEnviar.textContent = 'Guardar cambios';

    
    cambiarVista('formulario');
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datosFormulario = {
        Titulo: inputTitulo.value.trim(),
        Director: inputDirector.value.trim(),
        año: inputAnio.value.trim(),
        Genero: inputGenero.value.trim(),
        Puntuacion: selectPuntuacion.value,
    };

    
    if (!datosFormulario.Titulo || !datosFormulario.Director || !datosFormulario.año || !datosFormulario.Genero) {
        alert("Por favor, rellena todos los campos de texto.");
        return;
    }

    if (peliculaEnEdicionId !== null) {
        
        actualizarPelicula(peliculaEnEdicionId, datosFormulario);
    } else {
        
        agregarPelicula(datosFormulario);
    }
});


verCatalogoBtn.addEventListener('click', () => {
    cambiarVista('catalogo');
    
    peliculaEnEdicionId = null;
    formTitle.textContent = 'Añadir pelicula';
    botonEnviar.textContent = 'Añadir al catálogo';
    formulario.reset();
});

verFormBtn.addEventListener('click', () => {
    
    peliculaEnEdicionId = null;
    formTitle.textContent = 'Añadir pelicula';
    botonEnviar.textContent = 'Añadir al catálogo';
    formulario.reset();
    cambiarVista('formulario');
});


document.addEventListener('DOMContentLoaded', () => {
    
    const contenidosIniciales = contenidoPadreDiv.querySelectorAll('.contenido');
    contenidosIniciales.forEach(el => el.remove());

    
    renderizarCatalogo();

    
    cambiarVista('catalogo');
});
