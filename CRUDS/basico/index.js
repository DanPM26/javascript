let array = []

function guardar(){
    let casillas = {
        "nombre": document.getElementById("nombre").value,
        "edad": document.getElementById("edad").value,
        "correo": document.getElementById("correo").value,
        "curso": document.getElementById("curso").value
    }
  console.log(casillas)
  array.push(casillas)
  renderizado()
}

function renderizado(){
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = "";
    array.forEach(function(element){
        console.log("forEach",element)
        mostrar.innerHTML += `
        <div class="curso-tabla">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Correo</th>
            <th scope="col">Curso</th>
          </tr>
        </thead>
        <tbody>
    <tr>
      <td>${element.nombre}</td>
      <td>${element.edad}</td>
      <td>${element.correo}</td>
      <td>${element.curso}</td>
    </tr>
  </tbody>
        </div>
        `
    })
}


// let arr = []


// function guardar(){
//     let casilla = document.getElementById("casilla").value
//     console.log("casilla",casilla)
//     arr.push(casilla)
//     renderizado()
// }

// function renderizado(){
//     let mostrar = document.getElementById("mostrar")
//     mostrar.innerHTML = " "; 
//     arr.forEach(function(element){
//         console.log(element)
//     mostrar.innerHTML +=`
//     <div class="card text-center mb-4">
//     <div class="card-body">
//     <strong>Libros</strong>: ${element}
//      </div>
//  </div>
//     `
//     })
// }

