// condicional if/else
var nota = 3;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);

//----------
//operador ternario
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

//-----------
//condicional multiple
var nota = 7;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);

//------------------
//Stwich
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);

//---------------
// Bucle while

i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);

  i = i + 1; // Incrementamos el valor de i
}
//----------------
// Bucle for 
// for (inicialización; condición; incremento)

for (i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}

 //----------------
// for multiple
for (i = 0, j = 5; i < 5; i++, j--) {
    console.log("Valor de i y j:", i, j);
}
//------------
//---- Ejercicios con operadores lógicos 
  var diaHoy = 17;
	var diaAyer = 16;
	var mesHoy = 10;
	var mesAyer = 10;
	var mesTexto = "10";
	var comparacion;

	//mayor que
	comparacion = diaHoy > diaAyer;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

	//menor que
	comparacion = diaHoy < diaAyer;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve false */

	//mayor o igual
	comparacion = mesHoy >= mesAyer;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

	//menor o igual
	comparacion = mesHoy <= mesAyer;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

	//iguales
	comparacion = mesHoy == mesAyer;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

	//idénticos
	comparacion = mesHoy == mesTexto;
	console.log(comparacion)  /* devuelve true */
	comparacion = mesHoy === mesTexto;
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve false */

	//AND lógico
	comparacion = (diaHoy > diaAyer) && (mesHoy == mesAyer);
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

	//OR lógico
	comparacion = (diaHoy > diaAyer) || (diaHoy == diaAyer);
	document.write("Resultado: " + comparacion + "<br>");  /* devuelve true */

//------------
// Juego de eight ball

var userName = 'Dany';
userName ? console.log(`Hello,${userName}. What is your question?`) : console.log('Hello!');
var userQuestion = 'Could I eat a huge pizza?';
const askQuestion = console.log(`I wondering about...${userQuestion}`)
var randomNumber = Math.floor(Math.random()* 8);
//console.log(randomNumber);
 var eightBall =`${randomNumber}`;

switch (eightBall){
 case '1': 
  console.log('It is certain')
break;
 case '2': 
  console.log('It is decidedly so')
break;
 case '3': 
  console.log('Reply hazy try again')
break;
 case '4': 
  console.log('Cannot predict now')
break;
 case '5': 
  console.log('Do not count on it')
break;
 case '6': 
  console.log('My sources say no')
break;
 case '7': 
  console.log('Outlook not so good')
break;
 case '8': 
  console.log('Signs point to yes')
break;
}
