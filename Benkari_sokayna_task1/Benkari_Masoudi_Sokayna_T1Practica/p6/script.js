function reverseString(str) {
  return str.split("").reverse().join("");
}

let cadena = prompt("Introduce una cadena:");

// Longitud de la cadena
document.write("La longitud de la cadena es " + cadena.length + " caracteres<br>");

// Pasar a mayúsculas y minúsculas
document.write("La cadena en mayúsculas es " + cadena.toUpperCase() + "<br>");
document.write("La cadena en minúsculas es " + cadena.toLowerCase() + "<br><br>");

// Mostrar palabras normales
document.write("CADENA NORMAL<br>");
let palabras = cadena.split(" ");
for (let i = 0; i < palabras.length; i++) {
  document.write(palabras[i] + "<br>");
}

// Mostrar palabras al revés
document.write("<br>CADENA AL REVÉS<br>");
for (let i = palabras.length - 1; i >= 0; i--) {
  document.write(palabras[i] + "<br>");
}
