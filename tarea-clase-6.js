/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//prompt("hola");

const $botonSiguiente = document.querySelector("#siguiente");
const $botonEmpezarDeNuevo = document.querySelector("#resetear");

const $listaIntegrantes = document.querySelector("#lista-integrantes");

$botonSiguiente.onclick = function () {
  const cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes-familia").value
  );
  crearIntegrantes(cantidadIntegrantes);
  mostrarCantidadIntegrantes();
  return false;
};

$botonEmpezarDeNuevo.onclick = function () {
  borrarIntegrantes();
  return false;
};

function mostrarCantidadIntegrantes() {
  $listaIntegrantes.className = "";
}

function crearIntegrantes(cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    const $EdadIntegrante = document.createElement("label");
    const textoLabel = document.createTextNode(
      `Edad del integrante #${i + 1}: `
    );
    const $edad = document.createElement("input");
    $edad.type = "number";
    $edad.id = "edad-integrante";
    $EdadIntegrante.appendChild(textoLabel);
    $listaIntegrantes.appendChild($EdadIntegrante);
    $listaIntegrantes.appendChild($edad);

  }
}

function borrarIntegrantes() {
  while ($listaIntegrantes.firstChild) {
    $listaIntegrantes.removeChild($listaIntegrantes.firstChild);
  }
  document.querySelector('#cantidad-integrantes-familia').value = "";
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
