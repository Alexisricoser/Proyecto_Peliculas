verForm.addEventListener("click", () => {
    contForm.hidden = false
    Catalogo.setAttribute("hidden", "true")
})
verCatalogo.addEventListener("click", () => {
    contForm.setAttribute("hidden", "true")
    Catalogo.hidden = false
})
botonenviar.addEventListener("click", (event) => {
    event.preventDefault()
    let titulo = formulario.elements['Titulo'].value;
    let director = formulario.elements['Director'].value;
    let año = formulario.elements['año'].value;
    let genero = formulario.elements['Genero'].value;
    let puntuacion = formulario.elements['Puntuacion'].value;

    let div = document.createElement("div")

    let titulot = document.createElement("h2")
    titulot.innerText = "Titulo: " + titulo

    let directort =document.createElement("p")
    directort.innerText = "Director:" + director

    let añot =document.createElement("p")
    añot.innerText ="Año de estreno:" + año

    let generot =document.createElement("p")
    generot.innerText ="Genero:" + genero

    let puntuaciont = document.createElement("p")
    puntuaciont.innerText ="Valoracion:" + puntuacion
    
    div.className = "contenido";

    div.appendChild(titulot);

    div.appendChild(directort);

    div.appendChild(añot);

    div.appendChild(generot);

    div.appendChild(puntuaciont + " estrellas");

    Catalogo.appendChild(div)

    formulario.elements['Titulo'].value = ""
    formulario.elements['Director'].value = ""
    formulario.elements['año'].value = ""
    formulario.elements['Genero'].value = ""

    contForm.setAttribute("hidden", "true")
    Catalogo.hidden = false
    
})