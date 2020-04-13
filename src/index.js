import cipher from './cipher.js';
alert("HolaMundo");
document.getElementById("escogerCifrar").addEventListener("click",escogerCifrar);

function escogerCifrar() {
	let siguiente = document.getElementById("cifrar1");
    siguiente.style.display = "block";

    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "none";	
}
document.getElementById("escogerDescifrar").addEventListener("click",escogerDescifrar);
function escogerDescifrar() {
	let siguiente = document.getElementById("descifrar1");
    siguiente.style.display = "block";

    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "none";	
}

//Parte para cifrar mensaje !!

document.getElementById("cifrarSms").addEventListener("click",cifrarSms);

function cifrarSms(){
	let cifrarSmsActual = document.getElementById("cifrar1");
	cifrarSmsActual.style.display = "none";
// Esta parte es de los textarea
cipher.encode(offset,texto);

const offset = parseInt(document.getElementById("offset").value);//->Esto es para el Offset
let texto = document.getElementById("textoCifrar1").value;
/*let resul = "";
let x;
let inCode = "";
let inCode1 = "";

for (x = 0; x < texto.length; x++) {
	
	if (texto.charCodeAt(x)>=65 && texto.charCodeAt(x)<=90){
		inCode= (((texto.charCodeAt(x)-65)+offset)%26)+65;
	}else if (texto.charCodeAt(x)>= 97 && texto.charCodeAt(x)<= 122){
	inCode = String.fromCharCode((texto.charCodeAt(x)- 97 + offset)% 26 + 97);
	resul += inCode;
}else if (texto.charCodeAt(x) === 164){
	texto.charCodeAt(x) = ((texto.charCodeAt(x)- 164 + offset)% 1 + 164);
		inCode1 = String.fromCharCode(texto.charCodeAt(x));
		resul += inCode1;
}else if(texto.charCodeAt(x)===32){
	inCode= 32;
}
	resul += String.fromCharCode(inCode);*/
document.getElementById("resultado").innerHTML = resul;
}
    // termina textarea 
	let resultadoDelSms = document.getElementById("cifrar2");
	resultadoDelSms.style.display = "block";
  //}
  document.getElementById("clean").addEventListener("click",limpiar);
  function limpiar() {
	document.getElementById("textoCifrar1").value = "";
	document.getElementById("offset").value = ""; 
	document.getElementById("textoDescifrar").value = "";
	document.getElementById("offset1").value = "";
  }

  document.getElementById("si").addEventListener("click",cifrarSmsDeVuelta);
  function cifrarSmsDeVuelta(){
	let resultadoDelSmsActual = document.getElementById("cifrar2");
	resultadoDelSmsActual.style.display = "none";
  
	let cifrarSms = document.getElementById("cifrar1");
	cifrarSms.style.display = "block";
  }

  document.getElementById("no").addEventListener("click",regresarInicio1);
  function regresarInicio1(){
	let resultadoDelSmsActual = document.getElementById("cifrar2");
	resultadoDelSmsActual.style.display = "none";
  
	let inicio = document.getElementById("bienvenida");
	inicio.style.display = "block";
  }

//Parte para descifrar mensaje !!
document.getElementById("descifrar").addEventListener("click",descifrar);
function descifrar(){                       
	let recibirCodActual = document.getElementById("descifrar1");
	recibirCodActual.style.display = "none";

	cipher.decode(offset1,texto);
const offset1 = parseInt(document.getElementById("offset1").value);//->Esto es para el Offset
let texto = document.getElementById("textoDescifrar").value;
/*let resul = "";
let x;
let inCode = "";


for (x = 0; x < texto.length; x++) {
	
	if (texto.charCodeAt(x)>=65 && texto.charCodeAt(x)<=90){
		inCode= (((texto.charCodeAt(x)-65)-offset1)%26)+65;
	}else if (texto.charCodeAt(x)>= 97 && texto.charCodeAt(x)<= 122){
	inCode = String.fromCharCode((texto.charCodeAt(x)- 97 - offset1)% 26 + 97);
	resul += inCode;	
}else if(texto.charCodeAt(x)===164){
	inCode= 164;
}else if(texto.charCodeAt(x)===32){
	inCode= 32;
}
	resul += String.fromCharCode(inCode);*/
document.getElementById("resultado2").innerHTML = resul;
//}
  
	let inicioSiguiente = document.getElementById("descifrar2");
	inicioSiguiente.style.display = "block";
  }
  document.getElementById("si2").addEventListener("click",cifrarSmsV1);
  function cifrarSmsV1(){
	
	let descifradoAtual = document.getElementById("descifrar2");
	descifradoAtual.style.display = "none";
  
	let cifrarSiguiente = document.getElementById("cifrar1");
	cifrarSiguiente.style.display = "block";
  }

  document.getElementById("no2").addEventListener("click",regresarInicio2);
  function regresarInicio2(){
	
	let volverInicioActual = document.getElementById("descifrar2");
	volverInicioActual.style.display = "none";
  
	let inicioSiguiente = document.getElementById("bienvenida");
	inicioSiguiente.style.display = "block";
  }
  console.log(cipher);