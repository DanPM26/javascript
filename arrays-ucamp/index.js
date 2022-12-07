// Mostrar los números impares de un arreglo 
function numerosimpares(){
    for(i =1; i < 10 ; i++){
      if( i%2 !== 0){
        console.log("impar",i )
      }
    }
  }
  numerosimpares()
// Tablas de multiplicar 
function tablas(){
    valor = 5;
    for(i = 1; i <=10; i++){
      multi = i * valor
      console.log( multi)
    }
  }
  tablas()

//-------------------
//Recibir un array de números, ordenarlo y mostrarlo
let valores = [1, 2, 45, 5, 6, 3, 1, 8]
function comparar(a,b){ return a - b}
// a,b son parametros 
// Si devuelve -1, a se va a situar en un indice menor a b
// Si devuelve 0, no hay cambios
// Si devuelve 1, b se va a situar en un indice menor a a


// A esto si recordamos el inidice en javascript y posicionas el abecedario como lo conocemos a = 0 y b = 1

valores.sort(comparar)

// Segundo ejemplo
let valores2 = [100, 5, 5, 8, 3, 7, 8]
function comparar2(a,b){ return a - b}
valores.sort(comparar2)

//---------

//FizzBuzz
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("Fizz");
    else if (i % 3 == 0) console.log("Buzz");
    else if (i % 5 == 0) console.log("FizzBuzz");
    else console.log(i);
}

//Nota: primero verificamos 15, ya que todos los números divisibles por 3 y 5 dividirían 15 y una condición si se rompe una vez que la salida es verdadera.

//----------
// Dado un arreglo de diferentes palabras, ordena alfabéticamente las palabras y muestralas en consola en orden

function Burbuja() {
    let lista = ['naranja', 'fresa', 'sandia', 'uvas', 'cerezas', 'manzana'];
    let n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}
Burbuja() 
