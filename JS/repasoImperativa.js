// El contenido de "recipiente" puede cambiar, recipiente es una variable
recipiente = "papel";
// El alert nos permite mostrar algo en pantalla
alert(recipiente)
// Existen diversos tipos de datos
String = 'Cadena de texto';
Number = 25;
booleano = true; // o false
// Casos especiales
// var, let, const para declarar variables y constantes
var numero = 15;
// let nos limita el alcance de la variable al bloque donde se ejecuta
// let es local y var es global
const nombre = "Juliana";
// Las constantes no pueden cambiar su valor
// Declaramos la variable pero no esta inicializada
let edad;
// Si pedimos mostrar edad en pantalla nos saldra undefined, la variable existe pero no tiene valor
edad = 19;
// Variables multiples en la misma linea
let n1,n2,n3;
n1 = 1;
n2 = 2;
n3 = 3;
alert(n1)
// null: nulo, esta declarada vacia
let edades = null;
// NaN : not a number, no es un numero
n4 = "a";
alert(n1*n2*n4)
// prompt() es una api que nos permite ingresar por teclado
let tunombre = prompt("Dime tu nombre: ");
alert ("Tu nombre es: " + tunombre)
// Op. de asignacion =, +=, -=, /=, *=, %=, **=
n1 += 9;
// Op. aritmeticos son valores numericos
numero1 = 10;
numero2= 2;
resultado = numero1**numero2;
alert(resultado)
// Concatenacion es unir strings (cadenas de texto)
saludo = "Hola Juliana";
pregunta = "¿Como estas?";
frase = saludo + pregunta;
document.write(frase + "<br>")
// forzar un string: cuando el string detecta texto convierte todo en una cadena de texto por ser te tipado dinamico
m1=2;
m2=3;
// el resultado esperado si no existiera el texto seria 5, pero al convertirse en string es 23
cadena = " " + m1 + m2;
alert(cadena)
// concat es una funcion, solo funciona para las cadenas (debe existir al menos una)
m3 = "5"
cadena = m3.concat(m2);
document.write(cadena + "<br>");
// ${} 
frase1 = "Julian y Juliana";
frase2 = frase1 + "se van a casar" + "<br>"; // Forma tradicional
document.write(frase2) // se usa el"<br>" porque el .write es html
// alt 96, solo funciona con el ` backticks
frasefinal = `ellos son ${frase1} y debajo de un arbol se van a besar uwu`;
document.write(frasefinal + "<br>");
// Si quieres poner comillas " " debes poner ' ' por fuera y viceversa
// Operadores de comparacion (comparan valores y devuelven true o false)
document.write((m1 == m2)+ "<br>"); //false - igualdad
document.write((m1 != m2)+ "<br>"); //true - desigualdad
m4 = 5;
document.write((m3 == m4)+ "<br>"); //true 
document.write((m3 === m4)+ "<br>"); //false - identico (mismo tipo y contenido)
document.write((m3 !== m4)+ "<br>"); //true - estrictamente distinto
// <, >, <=, >=
// Operadores logicos (devuelvenun resultado a partir de que se cumpla o no una condicion)
let opc = true;
let opc1 = true;
let resultado2 = opc && opc1; // AND && - si las dos condiciones se cumplen devuelve true
let resultado3 = opc || opc1; // OR && - si cualquiera de las dos es true  
let resultado4 = !opc; // NOT && - devuelve lo contrario
document.write(resultado2 + "<br>" ) //true 
document.write(resultado3 + "<br>") //true
document.write(resultado4 + "<br>") //false
// camelCase: la primera comienza con minuscula y las demas letras iniciales en Mayusculas
esteEsUnEjemplo = "Js trabaja con camelcase, es lo mas recomendable pero luce feo. Tambien existen el snake_case y el PascalCase";
// Camel case (ex: someVariable)
// Snake case (ex: some_variable)
// Pascal case (ex: SomeVariable)
// Condiocionales, son sentencias que nos permiten validad un bloque de codigo
// if ( condicion ) { 
//    alert("Hola") }  [Si es true se ejecuta]
if (nombre == "Juliana"){
    document.write("Hola " + nombre)
}
if (nombre == "Julian"){
    document.write(`Hola ${nombre} espero estes bien`)
} // si esto no se cumple podemos colocar otra condicion
else if (nombre == "Juliana"){
    alert("Tu nombre no es Julian pero si Juliana")
} // si nada de lo anterior se cumple usamos else
else {
    alert("No eres del equipo mochi")
}
