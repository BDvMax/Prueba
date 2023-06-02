var elementoBoton = document.getElementById("Boton")
var elementoSubtitulo = document.getElementById("subtitulo")
// Hola <>
elementoBoton.addEventListener("click", cambiarEstado)

function cambiarEstado()
{
  if(elementoBoton.classList.contains("estado-bienvenida"))
    {
      elementoBoton.classList.remove("estado-bienvenida")
      elementoBoton.classList.add("estado-despedida")
      elementoSubtitulo.innerText = "Hasta luego"
    }
  else if(elementoBoton.classList.contains("estado-despedida"))
    {
      elementoBoton.classList.remove("estado-despedida")
      elementoBoton.classList.add("estado-bienvenida")
      elementoSubtitulo.innerText = "Bienvenido a mi web"
    }
}
