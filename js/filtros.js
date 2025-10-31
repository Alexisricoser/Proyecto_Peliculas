// filtros.js
document.addEventListener('DOMContentLoaded', () => {
    const inputTitulo = document.getElementById('buscadorTitulo');
    const inputDirector = document.getElementById('buscadorDirector');
    const selectGenero = document.getElementById('buscadorGenero');

    function extraerCampo(peli, etiquetaRegex) {
        const nodes = Array.from(peli.querySelectorAll('h1,h2,h3,p'));
        const nodo = nodes.find(n => etiquetaRegex.test(n.textContent));
        return nodo ? nodo.textContent.replace(etiquetaRegex, '').trim() : '';
    }

    function filtrarPelis() {
        const pelis = document.querySelectorAll('#Catalogo .contenido');
        const busqueda = (inputTitulo.value || '').toLowerCase().trim();
        const directorBus = (inputDirector.value || '').toLowerCase().trim();
        const generoSel = (selectGenero.value || '').trim();

        pelis.forEach(peli => {
            const titulo = extraerCampo(peli, /^titulo[:\s]*/i).toLowerCase();
            const director = extraerCampo(peli, /^director[:\s]*/i).toLowerCase();
            const genero = extraerCampo(peli, /^genero[:\s]*/i);

            let mostrar = true;
            if (busqueda && !titulo.includes(busqueda)) mostrar = false;
            if (directorBus && !director.includes(directorBus)) mostrar = false;
            if (generoSel && generoSel.toLowerCase() !== 'defaut' && generoSel.toLowerCase() !== '' &&
                    genero.toLowerCase() !== generoSel.toLowerCase()) mostrar = false;

            peli.style.display = mostrar ? '' : 'none';
        });

        const contador = document.querySelector('.contadorCatalogo');
        if (contador) {
            const visibles = Array.from(pelis).filter(el => el.style.display !== 'none').length;
            contador.textContent = `Numero de peliculas/series: ${visibles} / ${pelis.length}`;
        }
    }

    inputTitulo.addEventListener('input', filtrarPelis);
    inputDirector.addEventListener('input', filtrarPelis);
    selectGenero.addEventListener('change', filtrarPelis);

    const btnEliminar = document.querySelector('.eliminarFiltros');
    if (btnEliminar) {
        btnEliminar.addEventListener('click', (e) => {
            e.preventDefault();
            inputTitulo.value = '';
            inputDirector.value = '';
            selectGenero.value = 'Defaut';
            filtrarPelis();
        });
    }

    const btnMejor = document.querySelector('.mejorValoradas');
    if (btnMejor) {
        btnMejor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('#Catalogo .contenido').forEach(peli => {
                const valor = extraerCampo(peli, /^valoracion[:\s]*/i);
                const estrellas = (valor.match(/⭐/g) || []).length;
                peli.style.display = estrellas >= 5 ? '' : 'none';
            });
            filtrarPelis();
        });
    }

    filtrarPelis();
});
