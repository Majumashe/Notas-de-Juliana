
console.log("Inicio del programa"); 
//Para mostrar por consola

alert("Bienvenidos");
//El alert detiene toda la ejecicion del programa, no retorna ningun valor.

console.log( confirm('Validar') );
//El confirm retorna un boolean.

prompt('texto');
let nombre = prompt('Ingrese su nombre: ');
//Entrada de datos por consola rudimentaria, pero lo convierte en string.
let dia = parseInt ( prompt('¿Que dia del mes es hoy?') );

//Libreria Math
Math.random( ); //Genera un numero [0,1)
//Math.random( )*(max-min)+min genera un rango mas especifico.
parseInt( ) //Convierte un decimal en entero.
parseFloat( ) 
typeof(dia); //Tipo de dato.
console.log(typeof(dia)); //Nos mostrara el tipo de dato que ingreso el usuario.

while( confirm ('¿Jugar?'))
{
  numero = Math.round( Math.random()*(6-1)+1);
  alert('El dado dio '+ numero);
  console.log('Jugando al dado')
}
  
let gatito = {
   nombre: 'Leonardo',
   color: 'Gris',
   Edad: 1,
}

// Itera sobre un objeto iterable, obteniendo las propiedades

for (const propiedad in gatito) {
  console.log(propiedad);
  console.log('-----');
  console.log( gatito[propiedad])
  }
console.log("Fin del programa");