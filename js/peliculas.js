verForm.addEventListener("click", () => {
    contForm.hidden = false
    Catalogo.setAttribute("hidden", "true")
})
verCatalogo.addEventListener("click", () => {
    contForm.setAttribute("hidden", "true")
    Catalogo.hidden = false
})
