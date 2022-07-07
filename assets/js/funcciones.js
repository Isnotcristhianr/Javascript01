function number(n) {
  document.getElementById("demo1").innerHTML = "Se selecciono el botón: " + n;
}

function avisoCambio() {
  let datos =
    "<input type='text' value='Cambio' onclick='saludoCambio()'  class='btn btn-success'> ";

  document.getElementById("saludo").innerHTML = datos;
}

function saludoCambio() {
  console.log("cbcambio");
  alert("Hola a todos, binevenidos");
}

function soloNumeros(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

function displayRB() {
  let check = document.querySelector('input[name="colorRB"]:checked');

  if (check != null) {
    document.getElementById("demo3").innerHTML =
      check.value + " fue seleccionado";
      if (check.value == "Amarillo") {
        document.getElementById("demo3").style.backgroundColor = "yellow";
      } else if (check.value == "Azul") {
        document.getElementById("demo3").style.backgroundColor = "blue";
      } else if (check.value == "Rojo") {
        document.getElementById("demo3").style.backgroundColor = "red";
      } else if (check.value == "Negro") {
        document.getElementById("demo3").style.backgroundColor = "black";
      }else if (check.value == "Verde") {
        document.getElementById("demo3").style.backgroundColor = "green";
      }
  } else {
    document.getElementById("demo3").innerHTML = "No se a seleccionado nada en RB";
  }
}

function displayCB() {
  let check = document.querySelector('option[name="colorCB"]:checked');

  if (check != null) {
    document.getElementById("demo3").innerHTML =
      check.value + " fue seleccionado";
      if (check.value == "Amarillo") {
        document.getElementById("demo3").style.backgroundColor = "yellow";
      } else if (check.value == "Azul") {
        document.getElementById("demo3").style.backgroundColor = "blue";
      } else if (check.value == "Rojo") {
        document.getElementById("demo3").style.backgroundColor = "red";
      } else if (check.value == "Negro") {
        document.getElementById("demo3").style.backgroundColor = "black";
      }else if (check.value == "Verde") {
        document.getElementById("demo3").style.backgroundColor = "green";
      }
  } else {
    document.getElementById("demo3").innerHTML = "No se a seleccionado nada en CB";
  }
}
