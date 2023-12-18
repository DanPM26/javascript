
// let 
let saludar = "dice Hola";
let tiempos = 4;

if (tiempos > 3) {
     let hola = "dice Hola tambien";
     console.log(hola);// "dice Hola tambien"
 }
console.log(hola) // hola is not defined

//---let puede modificarse pero no volverse a declarar
let hola = "dice Hola";
hola = "dice Hola tambien";

//let holaUno = "dice Hola";
//let holaUno = "dice Hola tambien"; // error: Identifier 'saludar' has already been declared

//Sin embargo, si la misma variable se define en diferentes ámbitos, no habrá ningún error:

    let saludaR = "dice Hola";
    if (true) {
        let saludaR = "dice Hola tambien";
        console.log(saludaR); // "dice Hola tambien"
    }
    console.log(saludaR); // "dice Hola"

//const

const msn = {
    mensaje: "dice Hola",
    tiempos: 4
}
msn.mensaje = "tambien dice Hola"

//Tipos de datos
let foo = 42; // foo ahora es un número
foo = "bar"; // foo ahora es un string
foo = true; // foo ahora es un booleano

// Boleanos 
const a = 'palabra';
const b = false;
const c = true;
const d = 0
const e = 1
const f = 2
const g = null

// el operador o (||) verifica el primer operando.
console.log(a || b); // 'palabra'
console.log(c || a); // true
console.log(b || a); // 'palabra'
console.log(e || f); // 1
console.log(f || e); // 2
console.log(d || g); // null
console.log(g || d); // 0
// y (&&) funciona de manera similar. Sin embargo, para que la operación sea verdadera, ambos operandos deben ser verdaderos. 
console.log(a && c); // true
console.log(c && a); // 'palabra'