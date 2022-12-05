
window.addEventListener("load", function(){
    document.getElementById("cambiarcolor").addEventListener("click", function(){
        let colordeFondo = document.getElementById("colordefondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colordeFondo)
    })
})


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
