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

function cambiarVista(vista) {
    if (vista === 'formulario') {
        catalogoDiv.hidden = true;
        contForm.hidden = false;
    } else {
        contForm.hidden = true;
        catalogoDiv.hidden = false;
    }
}

function crearPeliculaElemento(pelicula) {
    const peliculaHTML = document.createElement('div');
    peliculaHTML.classList.add('contenido');
    peliculaHTML.setAttribute('data-id', pelicula.id);

    // 🧠 Importante: etiquetas sin tildes ni mayúsculas, para coincidir con filtros.js
    peliculaHTML.innerHTML = `
        <h2>Titulo: ${pelicula.titulo}</h2>
        <p>Director: ${pelicula.director}</p>
        <p>Genero: ${pelicula.genero}</p>
        <p>Valoracion: ${generarEstrellas(pelicula.puntuacion)}</p>
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

function eliminarPelicula(id) {
    peliculas = peliculas.filter(pelicula => pelicula.id !== id);
    renderizarCatalogo();
}

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
// ==== VALIDACIONES Y ATAJOS ====
document.addEventListener('DOMContentLoaded', () => {
    const inputAnio = document.getElementById('año');
    const errorAnio = document.getElementById('errorAnio');
    const selectGenero = document.getElementById('Genero');
    const selectPuntuacion = document.getElementById('Puntuacion');
    const anioActual = new Date().getFullYear();

    // ✅ Validar año mientras escribe
    inputAnio.addEventListener('input', () => {
        const valor = inputAnio.value.trim();
        if (!/^\d{0,4}$/.test(valor)) {
            inputAnio.value = valor.replace(/\D/g, '').slice(0, 4);
        }
        if (valor.length === 4 && (parseInt(valor) > anioActual || parseInt(valor) < 1800)) {
            errorAnio.style.display = 'inline';
        } else {
            errorAnio.style.display = 'none';
        }
    });

    // ✅ Validar año al enviar (por seguridad extra)
    formulario.addEventListener('submit', (e) => {
        const valor = parseInt(inputAnio.value);
        if (isNaN(valor) || valor > anioActual || valor < 1800) {
            e.preventDefault();
            alert('Por favor, introduce un año válido (entre 1800 y ' + anioActual + ').');
            return false;
        }
    });

    // ✅ Atajo de teclado para seleccionar puntuación (1–5)
    selectPuntuacion.addEventListener('keydown', (e) => {
        if (/[1-5]/.test(e.key)) {
            selectPuntuacion.value = e.key;
            e.preventDefault();
        }
    });

    // ✅ Atajos de teclado en select de Género (autocompletado rápido)
    let buffer = '';
    let timer;
    selectGenero.addEventListener('keydown', (e) => {
        if (e.key.length === 1 && /[a-zA-Záéíóúüñ]/i.test(e.key)) {
            buffer += e.key.toLowerCase();
            clearTimeout(timer);
            timer = setTimeout(() => buffer = '', 800); // se limpia después de 0.8s

            const opciones = Array.from(selectGenero.options);
            const match = opciones.find(opt => opt.textContent.toLowerCase().startsWith(buffer));
            if (match) {
                selectGenero.value = match.value;
            }
        }
    });
});
// ==== FIN VALIDACIONES Y ATAJOS ====