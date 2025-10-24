let precio = parseFloat(prompt("Introduce el precio del artículo:"));
let iva = precio * 0.21; // 21% de IVA
let total = precio + iva;

// Redondear a dos decimales
total = total.toFixed(2);
iva = iva.toFixed(2);

alert("IVA (21%): " + iva + " €");
alert("Precio total: " + total + " €");
