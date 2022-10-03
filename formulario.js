var formulario = document.querySelector(".formulario")//mandamos a llamar correctamente el id de la etiqueta form linea 14 de html
//var formulario = document.querySelector("#form") aqui se detecta un error de syntaxis debido a que el id form esta mal escrito ya que debe de ser formulario y por eso no puede mandarlo a llamar la variable
formulario.onsubmit = function(e) {
  e.preventDefault();//escribimos de manera correta el metodo de preventDefault
  //e.prevent(); esta mal escrito el metodo de preventDefault
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}//funcionformulario

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")//aqui verificamos que la etiqueta div de la linea 32 este bien indicada con un id, porque en caso contrario no, nos arrojara el resultado

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")//se escribe correctamente la funcion de add
console.log(elementoLista);
//elementoLista.classList.added("elemento-lista")error de sintaxis al agregar con un added en vez de add
lista.appendChild(elementoLista)

//esta parte del codigo se puede borrar o cmoentar para evitar la doble escritura de las variables
//var spanNombre = document.createElement("span")
//var inputNombre = document.createElement("input")
//var espacio = document.createElement("br")
//spanNombre.textContent = "Nombre: "
//inputNombre.value = nombre 
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}