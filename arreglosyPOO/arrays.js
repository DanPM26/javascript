//Arrays: Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. 
let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
// 2

//Acceder a un elemento de Array mediante su índice

let primero = frutas[0]
// Manzana
let ultimo = frutas[frutas.length - 1]
// Banana
frutas.sort()

//Recorrer un Array
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1


//Añadir un elemento al final de un Array
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]


//Eliminar el último elemento de un Array
let ultimo2 = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]


//Añadir un elemento al principio de un Array 
let nuevaLongitud1 = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]


//Eliminar el primer elemento de un Array
let primero1 = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]


//Encontrar el índice de un elemento del Array
frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1

//Eliminar un único elemento mediante su posición

// Ejemplo:

// Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

let elementoEliminado = frutas.splice(pos, 1)
// ["Manzana", "Fresa"]

//------------POO----------------

//Encapsulamiento
class calcula{
    constructor(n1,n2){
      this.n1 = n1;
      this.n2 = n2;
    }
   get suma(){
     return this.n1 + this.n2
   }
   get resta(){
     return this.n1 - this.n2
   }
   get multiplicacion(){
     return this.n1 * this.n2
   }
   get division(){
     return this.n1 % this.n2
   }
 }
 
 
 const suma = new calcula(5,10)
 const resta = new calcula(5,10)
 const multi = new calcula(5,10)
 const div = new calcula(5,10)
 
 console.log(suma.suma)
 console.log(resta.resta)
 console.log(multi.multiplicacion)
 console.log(div.division)
//---------------
//Herencia
class Animales {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    canta() {
        return `${this.nombre} puede cantar`;
    }
    
    baila() {
        return `${this.nombre} puede bailar`;
    }
}

// se usa el extends para hacer una clase hija
class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }
    
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

let clara = new Gatos("Clara", 33, "índigo");
console.log(clara.canta());
console.log(clara.bigotes());
//---------------------------
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `${this.nombre} está saludando`;
    }

    static probarSaludo(nombre) {
        return `${nombre} está saludando`;
    }
}


class Estudiante extends Persona {

}
const juanito = new Estudiante("juanito", 55);
console.log(juanito);

//------------------------
class Persona {
    constructor(nombre, libros) {
        this.nombre = nombre;
        this.libros = libros || [];
    }

    // setter
    set setLibro(libro) {
        this.libros.push(libro);
    }

    // getter
    get getLibros() {
        return this.libros;
    }

    // método
    buscarLibroPorTitulo(titulo) {
        return this.libros.find((item) => item.titulo === titulo);
    }
}

const personaUno = new Persona("Ignacio");
personaUno.setLibro = { titulo: "Papelucho", autor: "Marcela Paz" };
personaUno.setLibro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
};

console.log(personaUno.buscarLibroPorTitulo("Papelucho"));

console.log(personaUno.getLibros);
//--------------------------
function Animal(nombre) {
    this.nombre = nombre;
  }
// Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.
  Animal.prototype.hablar = function () {
    console.log(this.nombre + "hace un ruido.");
  };
  
  class Perro extends Animal {
    hablar() {
        //La palabra clave super es usada para llamar funciones del objeto padre.
      super.hablar();
      console.log(this.nombre + " ladra.");
    }
  }
  
  var p = new Perro("Mitzie");
  p.hablar();
  
//---------------------------
function Animales(nombre, edad) {
    let nuevoAnimal = Object.create(ConstructorAnimal);
    nuevoAnimal.nombre = nombre;
    nuevoAnimal.edad = edad;
    return nuevoAnimal;
}

let ConstructorAnimal = {
    canta: function() {
        return `${this.nombre} puede cantar`;
    },
    baila: function() {
        return `${this.nombre} puede bailar`;
    }
}

function Gatos(nombre, edad, colorBigotes) {
    let nuevoGato = Animales(nombre, edad);
    // establece el prototipo especificado
    Object.setPrototypeOf(nuevoGato, ConstructorGato);
    nuevoGato.colorBigotes = colorBigotes;
    return nuevoGato;
}

let ConstructorGato = {
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

Object.setPrototypeOf(ConstructorGato, ConstructorAnimal);
const tito = Gatos("Clara", 33, "púrpura");

tito.canta();
tito.baila();
// Resultado esperado
// "Clara puede cantar"
// "Tengo bigotes color púrpura"
