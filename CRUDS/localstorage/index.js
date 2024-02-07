// localStorage

const json = {"result":true, "count":42};
const string= JSON.stringify(json)
console.log(string)

const obj = JSON.parse(string)
console.log(obj.count)
console.log(obj.result)
//-----------
let miscoches =[
    {
        marca: "Toyota",
       modelo: "Aygo X",
       año: 2022
    },
    {
        marca: "Nissan",
       modelo: "Versa",
       año: 2018
    },
    {
        marca: "Volskwagen",
       modelo: "Polo",
       año: 2021
    }
] 

localStorage.setItem("lista", JSON.stringify(miscoches))
let recibirstring = localStorage.getItem("lista")
console.log(recibirstring)

//typeof: devuelve el tipo de las variables u operadores sin realizar la operación
// console.log(typeof(recibirstring))

// const Objeto = JSON.parse(recibirstring)
// console.log(Objeto)

//---------------
//  function guardarDatos() {
 
//      localStorage.nombre = document.getElementById("nombre").value;
//      localStorage.password = document.getElementById("password").value;
//      document.getElementById("nombre").value = ""; 
//     document.getElementById("password").value = ""; 

//  }

//  function recuperarDatos() {
//      if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
//          document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
//      } else {
//          document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
//      }
//  }


function guardarDatos(){

    let nombre = document.getElementById("nombre").value 
    let password = document.getElementById("password").value 

    let inputValue = {
        "nombre": nombre,
        "password":password
    }
// .parse(): transforma la cadena en JSON en objeto
    let datos= JSON.parse(localStorage.getItem("datos")) ? JSON.parse(localStorage.getItem("datos")) : []
    console.log(inputValue)
    datos.push(inputValue)

    //almacena los valores
    localStorage.setItem("datos", JSON.stringify(datos))

document.getElementById("nombre").value = ""; 
   document.getElementById("password").value = "";
   recuperarDatos()
}

function recuperarDatos(){
    let lista = document.getElementById("lista")

    lista.innerHTML=`
    <table>
    <thead>
    <th>Nombre</th>
    <th>Contraseña</th>
    </thead>
    </table>
    `

    let datos= JSON.parse(localStorage.getItem("datos")) ? JSON.parse(localStorage.getItem("datos")) : []

    datos.forEach((element,index) => {
        lista.innerHTML += `
        <td>${element.nombre}<td>
        <td>${element.password}<td>
        <td> <button onclick="borrar(${index})" class="btn btn-danger" >Borrar </button><td>
        `
    });
}

function borrar(position){
    let datos = JSON.parse(localStorage.getItem('datos')) ?  JSON.parse(localStorage.getItem('datos')) : []
     // Eliminar el elemento del arreglo datos
     datos.splice(position,1)
     localStorage.setItem('datos', JSON.stringify(datos));
     recuperarDatos()
}



//---------------
//Guardar clicks
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result2").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }