import cipher from './cipher.js';
alert("HolaMundo");


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

const offset = parseInt(document.getElementById("offset").value);//->Esto es para el Offset

let escrito = document.getElementById("textoCifrar1").value;
/*let resul = "";
let x;
let inCode = "";
let inCode1 = "";

for (x = 0; x < escrito.length; x++) {
	
	if (escrito.charCodeAt(x)>=65 && escrito.charCodeAt(x)<=90){
		inCode= (((escrito.charCodeAt(x)-65)+offset)%26)+65;
	}else if (escrito.charCodeAt(x)>= 97 && escrito.charCodeAt(x)<= 122){
	inCode = String.fromCharCode((escrito.charCodeAt(x)- 97 + offset)% 26 + 97);
	resul += inCode;
}

else if (escrito.charCodeAt(x) === 164){
	escrito.charCodeAt(x) = ((escrito.charCodeAt(x)- 164 + offset)% 1 + 164);
		inCode1 = String.fromCharCode(escrito.charCodeAt(x));
		resul += inCode1;
}

else if(escrito.charCodeAt(x)===32){
	inCode= 32;
}
	resul += String.fromCharCode(inCode);*/
document.getElementById("resultado").innerHTML = resul;
}
    // termina textarea 
	let resultadoDelSms = document.getElementById("cifrar2");
	resultadoDelSms.style.display = "block";
  //}

  function limpiar() {
	document.getElementById("textoCifrar1").value = "";
	document.getElementById("offset").value = ""; 
	document.getElementById("textoDescifrar").value = "";
	document.getElementById("offset1").value = "";
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

function descifrar(){                       
	
  
	let recibirCodActual = document.getElementById("descifrar1");
	recibirCodActual.style.display = "none";
	
	const offset1 = parseInt(document.getElementById("offset1").value);//->Esto es para el Offset

let escrito = document.getElementById("textoDescifrar").value;
/*let resul = "";
let x;
let inCode = "";


for (x = 0; x < escrito.length; x++) {
	
	if (escrito.charCodeAt(x)>=65 && escrito.charCodeAt(x)<=90){
		inCode= (((escrito.charCodeAt(x)-65)-offset1)%26)+65;
	}else if (escrito.charCodeAt(x)>= 97 && escrito.charCodeAt(x)<= 122){
	inCode = String.fromCharCode((escrito.charCodeAt(x)- 97 - offset1)% 26 + 97);
	resul += inCode;	
}else if(escrito.charCodeAt(x)===164){
	inCode= 164;
}else if(escrito.charCodeAt(x)===32){
	inCode= 32;
}
	resul += String.fromCharCode(inCode);*/
document.getElementById("resultado2").innerHTML = resul;
//}
  
	let inicioSiguiente = document.getElementById("descifrar2");
	inicioSiguiente.style.display = "block";
  }

  function cifrarSmsV1(){
	
	let descifradoAtual = document.getElementById("descifrar2");
	descifradoAtual.style.display = "none";
  
	let cifrarSiguiente = document.getElementById("cifrar1");
	cifrarSiguiente.style.display = "block";
  }


  function regresarInicio2(){
	
	let volverInicioActual = document.getElementById("descifrar2");
	volverInicioActual.style.display = "none";
  
	let inicioSiguiente = document.getElementById("bienvenida");
	inicioSiguiente.style.display = "block";
  }
  console.log(cipher);