/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonSiguiente = document.querySelector("#siguiente");
const $botonEmpezarDeNuevo = document.querySelector("#resetear");
const $botonCalcular = document.querySelector("#calcular");
const $listaIntegrantes = document.querySelector("#lista-integrantes");
const $resultados = document.querySelector("#resultados");

$botonSiguiente.onclick = function () {
  $botonSiguiente.disabled = true;
  const cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes-familia").value
  );
  crearIntegrantes(cantidadIntegrantes);
  mostrarCantidadIntegrantes();
  return false;
};

$botonEmpezarDeNuevo.onclick = function () {
  borrarIntegrantes();
  habilitarBotonSiguiente();
  ocultarResultados();
  return false;
};

$botonCalcular.onclick = function () {
  const edadesIntegrantes = document.querySelectorAll(".edades-integrantes");

  calcular(edadesIntegrantes);
  mostrarResultados(edadesIntegrantes);
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
    $edad.className = "edades-integrantes";

    $EdadIntegrante.appendChild(textoLabel);
    $listaIntegrantes.appendChild($EdadIntegrante);
    $listaIntegrantes.appendChild($edad);
  }
}

function borrarIntegrantes() {
  while ($listaIntegrantes.firstChild) {
    $listaIntegrantes.removeChild($listaIntegrantes.firstChild);
  }
  document.querySelector("#cantidad-integrantes-familia").value = "";
}

function habilitarBotonSiguiente() {
  $botonSiguiente.disabled = false;
}

function mostrarResultados(edadesIntegrantes) {
  $resultados.className = "";

  const $mayorIntegrante = document.querySelector("#mayor-integrante");
  const $menorIntegrante = document.querySelector("#menor-integrante");
  const $promedioEdades = document.querySelector("#promedio-edades-familia");

  mostrarEdades("mayor-integrante", calcularMayorEdad(edadesIntegrantes));
  mostrarEdades("menor-integrante", calcularMenorEdad(edadesIntegrantes));
  mostrarEdades(
    "promedio-edades-familia",
    calcularPromedioEdades(edadesIntegrantes)
  );
}

function mostrarEdades(mayorIntegrante, calculo) {
  document.querySelector(
    `#${mayorIntegrante}`
  ).textContent += `${calculo} años.`;
}

function ocultarResultados() {
  $resultados.className = "oculto";
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
