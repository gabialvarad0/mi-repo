function mostrarOcultarResumen() {
  var resumen = document.getElementById("texto-resumen");
  var boton = document.getElementById("boton-resumen");

  if (resumen.classList.contains("oculto")) {
    resumen.classList.remove("oculto");
    boton.textContent = "Mostrar menos";
  } else {
    resumen.classList.add("oculto");
    boton.textContent = "Mostrar más";
  }
}
