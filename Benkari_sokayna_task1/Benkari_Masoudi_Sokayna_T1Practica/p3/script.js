let mes = prompt("Dime un mes:").toLowerCase();

switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    alert("Estamos en Invierno");
    break;

  case "marzo":
  case "abril":
  case "mayo":
    alert("Estamos en Primavera");
    break;

  case "junio":
  case "julio":
  case "agosto":
    alert("Estamos en Verano");
    break;

  case "septiembre":
  case "octubre":
  case "noviembre":
    alert("Estamos en Otoño");
    break;

  default:
    alert("Mes no reconocido");
}
