console.log('Hola Mundo');
//Operadores 

let num1 = 10;
let num2 = 50;
9 * num1;
num2 - num1;
num2 % num1; 
num2 / num1;
//Expresiones complejas 
5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;

//Operadores de asignación 
var x = 3; // x contiene el valor 3
var y = 4; // y contiene el valor 4
x *= y; // x ahora contiene el valor 12

 //  Ejercicio node.js
 function suma(){
    let numero1 = 4;
    let numero2 = 10; 
    let calculo = numero1 + numero2;
    console.log("Resultado suma: " + calculo)
 }
 suma()

//  function suma(numero1,numero2){
//    let calculo = numero1 + numero2;
//    console.log("Resultado suma: " + calculo)
// }
// suma(5,6)

 function resta(){
    let numero3 = 4;
    let numero4 = 10; 
    let resultado = numero3 - numero4;
    console.log("Resultado resta: " + resultado)
 }
 resta()

 function multiplicacion(){
    let numero5 = 4;
    let numero6 = 10; 
    let result = numero5 * numero6;
    console.log("Resultado multiplicación: " + result)
 }
 multiplicacion()

 function division(){
    let numero7 = 4;
    let numero8 = 10; 
    let res = numero7 / numero8;
    console.log("Resultado division: " + res)
 }
 division()

 //-----------------------------
 let nombre = "Juan";
 let apellido= "Garcia";
 let nombrecompleto = nombre + apellido
 console.log(nombrecompleto)
 //-------------Condición if/else----------------
 let name =  "Dany";
 let edad = 24;
 if (edad > 18) {
   console.log(`${name},tienes permiso para conducir`)
 } else {
 console.log(`${name},no tienes permiso para conducir`)
 }
 //operador ternario
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

 //------------------------------
let m = 90;
let a = 90;
let g = 90;
let h = 90;
let f = 90;
let r = 90;
let promedio = (m + a + g + h + f + r) / 6
if (promedio > 70){
  console.log(`Aprobado: ${promedio}`)
} else {
  console.log(`Reprobado: ${promedio}`)
}

//-------- Ciclos--------
// for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
//   instrucción

//------For-------
for (let step = 0; step < 5; step++) {
   // Se ejecuta 5 veces, con valores del paso 0 al 4.
   console.log("Camina un paso hacia el este");
 }

 //----- Do/ While-----
 
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

 