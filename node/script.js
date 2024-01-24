console.log('Hola Mundo');


 //  Ejercicio node.js
 function suma(){
    let numero1 = 4;
    let numero2 = 10; 
    let calculo = numero1 + numero2;
    console.log("Resultado suma: " + calculo)
 }
 suma()

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
 //-----------------------------
 let name =  "Dany";
 let edad = 24;
 if (edad > 18) {
   console.log(`${name},tienes permiso para conducir`)
 } else {
 console.log(`${name},no tienes permiso para conducir`)
 }
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

//-----
//Me fuí al super y compre para un sandwich
let compras = ['pan','jamon','lechuga','pan','jitomate',]
compras.length;

//Que me faltó comprar?
let falto = compras.push('mayonesa', 'jugo', 'donas')
console.log(compras)


// //Que compre?
// for( i=0; i < compras.length; i++){
//   console.log(`Elemento ${i} y la compra fue ${compras[i]}`)
// }

//me arrependí de las donas que compré -> el metodo pop elimina elementos al final de un arreglo
compras.splice([6])

console.log(compras)

//Que compre?
 for( i=0; i < compras.length; i++){
  console.log(`Elemento ${i} y la compra fue ${compras[i]}`)
}

//Llegó mi mamá y me trajo otros 5 elementos

let comprasmama = ['bolillo','pollo','vegetales','chiles en vinagre', 'salchichas']
comprasmama.length;

//Que cosas tengo en total?
let total = [...compras, ...comprasmama]
console.log(total)
