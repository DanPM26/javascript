
// la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases. -> Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y un nombre para la clase "Rectangulo".

//------------------

// ¿Clases y funciones? 
// Una importante diferencia entre las *declaraciones de funciones* y las *declaraciones de clases es que las declaraciones de funciones son alojadas* y las *declaraciones de clases no lo son*. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otro modo el ejemplo de código siguiente arrojará un ReferenceError:
//const p = new Rectangle(); // ReferenceError
//class Rectangle {}

//-----------------
//Constructor
//El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método constructor, se arrojará un Error SyntaxError

// Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase

// class Rectangulo {
//     constructor (alto, ancho) {
//       this.alto = alto;
//       this.ancho = ancho;
//     }
//     // Getter
//     get area() {
//        return this.calcArea();
//      }
//     // Método
//     calcArea () {
//       return this.alto * this.ancho;
//     }
//   }
  
//   const cuadrado = new Rectangulo(10, 10);
  
//   console.log(cuadrado.area); // 100
  
//-----------
// Clases 


// // Clase padre
// class Forma {
//     constructor() {
//       console.log("Soy una forma geométrica.");
//     }
//   }
  
//   // Clase hija
//   class Cuadrado extends Forma {
//     constructor() {
//       super();
//       console.log("Soy un cuadrado.");
//     }
//   }
  
//   const c1 = new Cuadrado();
//    Soy una forma geométrica.
//    Soy un cuadrado.


//--------------------Ejercicios----------
// Crear un objeto como una variable con información personal (nombre, edad, ocupación). Crear un método que se llame “saldar” que reciba como parámetros nombre y edad, e imprimir estos valores como un saludo.

let info = {
    nombre: 'Dany',
    edad: 24,
    ocupacion: 'estudiante',
   
    saldar: function(){
      console.log( 'Hola, buenas tardes ' + this.nombre + ' ,es un place saludarte ' + this.ocupacion)
    }
  }
  
  info.saldar()

//---------------
//Utiliza el ejercicio anterior crea un objeto ahora creándolo como una clase, no olvides utilizar el método “Saludar” y utilizar el método constructor para crear tu clase
class persona{
    constructor(name){
      this.name = name
    }
    
    saludar(){
    console.log(`hola, mi nombre es ${this.name}`)
  }
  }
  
  // Recuerda que para utilizar el this va dentro de la función o dentro de la clase
  
  let person = new persona('Dylan')
  
  person.saludar()

  //-----------------
  // Crear una clase llamada calculadora donde recibamos 2 valores los cuales podrán pasar por las operaciones básicas según se necesite y muestre en consola el resultado

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

//----------------------
// Crear una variable global que sea un array y crear dos funciones:
// El primero debe agregar al array la información de un libro en forma de objeto.
// El segundo debe imprimir el arreglo de objetos. 
// De tal forma que se puedan mandar a llamar en la consola las funciones para agregar más información al arreglo o para imprimir todos los elementos del arreglo.

let libros = [];
function añadirlibros(autor,libro,año){
  libros.push({autor,libro,año})
}
function imprimir(){
  console.log(libros)
}


añadirlibros("Maquiavelo","El sistema",2004)
 imprimir()
 