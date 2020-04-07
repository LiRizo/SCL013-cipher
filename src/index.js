/*import cipher from './cipher.js';

console.log(cipher);*/

/* Codigo Cesar

A B C D E F G H I J K  L  M 
0 1 2 3 4 5 6 7 8 9 10 11 12

N  O  P  Q  R  S  T  U  V  W  X  Y  Z 
13 14 15 16 17 18 19 20 21 22 23 24 25

*/
/*Length En cadenas ( String )
El valor de la propiedad length en una cadena es igual a su número de caracteres.*/
//El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
//El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
//codigoASCII => codigo0a25 => desloco => giro => codigoASCII


function rot13(str){
  var solution = '';
  for (var i = 0; i < str.length; i++){
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 90){
      solution += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90){
      solution += String.fromCharCode(asciiNum - 13);
    } 
  }
  return solved; 
}

rot13('z')
/
  /*
// indice + 33 módulo de 26 = posición Nueva letra
(0+33)%26 //---> 7 (A = H)
(4+33)%26 //---> 11 (E = L) 
((índice - 33) módulo 26) + 26 = Posición antigua Letra
(0-33)%26 //---> -0 (H = A)
(11-33)%26 //--> -22 --> -22 + 26 = 4 (L = E)
(79+65-33)%26+65 //  72 --> inverso
' ' = 32
*/



/*function cifrado()*/

function escogerCifrar() {

	let siguiente = document.getElementById("cifrar1");
    siguiente.style.display = "block";

    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "none";
	
}

function escogerDescifrar() {

	let siguiente = document.getElementById("descifrar1");
    siguiente.style.display = "block";

    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "none";
	
}

