
window.addEventListener("load", function(){
    document.getElementById("cambiarcolor").addEventListener("click", function(){
        let colordeFondo = document.getElementById("colordefondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colordeFondo)
    })
})


///------Clickcounter 
let valor_inicial = 0;

    function actualizarResultado() {
      let observar_resultado = document.getElementById("result2");
      observar_resultado.innerHTML = `${valor_inicial}`;
    }

    function clickCounter() {
      valor_inicial++;
      actualizarResultado();
    }

    function reiniciarContador() {
     console.log("Borrar")
      valor_inicial = 0; 
      actualizarResultado();
    }

    document.getElementById("incrementar").addEventListener('click', clickCounter);
    document.getElementById("borrar").addEventListener('click', reiniciarContador);

//----- Conversor 

function pesos(){
    let pesos = document.getElementById("pesos").value
    let euros = 21
    let resultado = document.getElementById("resultado1")

    resultado.innerHTML = "Euros: "+ (pesos / euros)
}

function euros(){
    let euros = document.getElementById("euros").value
    let dolar = 1.06
    let res = document.getElementById("resultado2")
    
    res.innerHTML = "Dolares:"+ (euros * dolar)
}

function dolares(){
    let dolares = document.getElementById("dolares").value
    let bitcoin = 0.000060
    let resul = document.getElementById("resultado3")

    resul.innerHTML = "Bitcoin:" + (dolares * bitcoin)
}

//------- ejercicio utilizando ClassName

//.onload() cuando se termine de cargar
window.onload = function() {
    // Obtener elementos por su clase
    let elementosDestacados = document.getElementsByClassName("destacado");
   console.log(elementosDestacados)
    // Iterar sobre los elementos y realizar alguna acción
    //for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
    // el bucle se ejecute mientras el índice i sea menor que la longitud de la colección, asegurándonos de que no intentemos acceder a un índice que esté fuera del rango de la colección.
    for (let i = 0; i < elementosDestacados.length; i++) {
      elementosDestacados[i].style.textDecoration = "underline";
    }
  };

  //----- Utilización del getElementsByName

  function mostrarGeneroSeleccionado() {
    // Obtener elementos por su nombre
    var generoElementos = document.getElementsByName("genero");

    // Iterar sobre los elementos y encontrar el elemento seleccionado
    for (var i = 0; i < generoElementos.length; i++) {
      if (generoElementos[i].checked) {
        // Mostrar el resultado
        document.getElementById("resultadoGenero").innerText = "Género seleccionado: " + generoElementos[i].value;
        return; // Salir del bucle una vez que se haya encontrado el elemento seleccionado
      }
    }

    // Si no se selecciona ningún género
    document.getElementById("resultadoGenero").innerText = "Por favor, selecciona un género.";
  }

  //--------- Onchange
  document.addEventListener('DOMContentLoaded', function() {
    var miInput = document.getElementById('miInput');
    var mensaje = document.getElementById('mensaje');

    miInput.onchange = function() {
      mensaje.textContent = "Mensaje: Has ingresado tu nombre como " + miInput.value;
    };
  });