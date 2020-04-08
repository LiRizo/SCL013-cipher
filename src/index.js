//Vamos a ver que sale XD

/*Guia del abecedario

A B C D E F G H I J K  L  M 
0 1 2 3 4 5 6 7 8 9 10 11 12

N  O  P  Q  R  S  T  U  V  W  X  Y  Z 
13 14 15 16 17 18 19 20 21 22 23 24 25
*/

/* Formula ASCII 

(X - 65 + n) % 26 + 65

*/
//codigoASCII => codigo0a25 => desloco => giro => codigoASCII
/*---->>VEMOS!!
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
*/

function cifrado(message,nfijo){
  const textoIngresado = texto.value;
  textoCifrado.value = textoIngresado.split('').map(c=>{
      let mayus = (c == c.toUpperCase()) 
  })
}

//Botones, para movernos por nuestra pagina !!

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

//Parte para cifrar mensaje !!
function cifrarSms(){


let cifrarSmsActual = document.getElementById("cifrar1");
cifrarSmsActual.style.display = "none";

// Esta parte es de los textarea
let n=0;
let n=document.getElementById("numero").value;

let escrito = document.getElementById("textoCifrar1").value;
let texto = "";
let termino = "";
let i;

for (i = 0; i < escrito.length; i++) {

if (escrito.charCodeAt(i)>=65 && escrito.charCodeAt(i)<=90){
  texto= (((escrito.charCodeAt(i)-65)+parseInt(n))%26)+65;
}
else if(escrito.charCodeAt(i)===32){
  texto= 32;
}
termino += String.fromCharCode(texto);
document.getElementById("resultado").innerHTML = termino;
}
// termina textarea 
let resultadoDelSms = document.getElementById("cifrar2");
resultadoDelSms.style.display = "block";
}

function cifrarSmsDeVuelta(){


let resultadoDelSmsActual = document.getElementById("cifrar2");
resultadoDelSmsActual.style.display = "none";

let cifrarSms = document.getElementById("cifrar1");
cifrarSms.style.display = "block";
}


function regresarInicio1(){


let resultadoDelSmsActual = document.getElementById("cifrar2");
resultadoDelSmsActual.style.display = "none";

let inicio = document.getElementById("bienvenida");
inicio.style.display = "block";
}

//Parte para descifrar mensaje !!

function descifrarCod(){                       


let recibirCodActual = document.getElementById("descifrar1");
recibirCodActual.style.display = "none";

let inicioSiguiente = document.getElementById("descifrar2");
inicioSiguiente.style.display = "block";
}

function regresarInicio2(){


let volverInicioActual = document.getElementById("descifrar2");
volverInicioActual.style.display = "none";

let inicioSiguiente = document.getElementById("bienvenida");
inicioSiguiente.style.display = "block";
}

function descifrarlo(){


let descifrarAtual = document.getElementById("descifrar2");
descifrarAtual.style.display = "none";

let descifradoSiguiente = document.getElementById("descifrar3");
descifradoSiguiente.style.display = "block";
}

function cifrarSmsV1(){


let descifradoAtual = document.getElementById("descifrar3");
descifradoAtual.style.display = "none";

let cifrarSiguiente = document.getElementById("cifrar1");
cifrarSiguiente.style.display = "block";
}


function regresarInicio3(){


let volverInicioActual = document.getElementById("descifrar3");
volverInicioActual.style.display = "none";

let inicioSiguiente = document.getElementById("bienvenida");
inicioSiguiente.style.display = "block";
}