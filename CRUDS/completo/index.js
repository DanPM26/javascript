
let array = JSON.parse(localStorage.getItem("casillas")) ? JSON.parse(localStorage.getItem("casillas")) : []

function guardar(){
    let casillas = {
        "nombre": document.getElementById("nombre").value,
        "edad": document.getElementById("edad").value,
        "correo": document.getElementById("correo").value,
        "curso": document.getElementById("curso").value
    }
  console.log(casillas)
  array.push(casillas)

  console.log(JSON.stringify(array))
  localStorage.setItem('casillas',JSON.stringify(array))
  
document.getElementById("nombre").value = ""
document.getElementById("edad").value = ""
document.getElementById("correo").value = ""
document.getElementById("curso").value = ""

  renderizado()
}

function renderizado(){
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = "";
    array.forEach(function(element, index){
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
      <td><button type="button" class="btn btn-warning" onclick="editar(${index})">Editar</button></td>
      <td><button type="button" class="btn btn-danger" onclick="borrar(${index})">Borrar</button></td>
    </tr>
  </tbody>
        </div>
        `
    })
}

function borrar(index){
  console.log(array.splice(index,1))
  console.log(JSON.stringify(array))
  localStorage.setItem('casillas',JSON.stringify(array))
  renderizado()
  console.log('borrado')
}

function editar(index){
for(i = 0 ; i < array.length; i++){
  if(i == index){
    console.log(i)
    
document.getElementById("nombre").value = array[i].nombre
document.getElementById("edad").value = array[i].edad
document.getElementById("correo").value = array[i].correo
document.getElementById("curso").value = array[i].curso

let mostrar = document.getElementById('mostrar')
mostrar.innerHTML=`
<td><button onclick="reguardar(${i})" class="btn btn-primary" >Guardar</button></td>
<td><button onclick="salir(this)"  class="btn btn-danger" >Salir</button></td>
`
}

  }
}


function reguardar(i){
   let casillas = {
     "nombre": document.getElementById("nombre").value,
     "edad": document.getElementById("edad").value,
     "correo": document.getElementById("correo").value,
     "curso": document.getElementById("curso").value
 }

   array[i] = casillas
 console.log(array[i])
 localStorage.setItem('casillas',JSON.stringify(array))
 
 document.getElementById("nombre").value = ""
document.getElementById("edad").value = ""
document.getElementById("correo").value = ""
document.getElementById("curso").value = ""

 renderizado()
 }
 

 function salir(e){
     e.parentElement.remove();
     renderizado()
 }
 