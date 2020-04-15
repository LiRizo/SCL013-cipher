import cipher from './cipher.js';

document.getElementById("escogerCifrar1").addEventListener("click",escogerCifrar);
function escogerCifrar() {
	let siguienteC = document.getElementById("cifrar1");
    siguienteC.style.display = "block";
    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "none";	
}

document.getElementById("escogerDescifrar1").addEventListener("click",escogerDescifrar);
function escogerDescifrar() {
	let siguienteD = document.getElementById("descifrar1");
    siguienteD.style.display = "block";

    let bienvenida1 = document.getElementById("bienvenida");
    bienvenida1.style.display = "none";	
}

//Parte para cifrar mensaje !!
document.getElementById("cifrarSms").addEventListener("click",cifrarSms);

function cifrarSms(){
	let cifrarSmsActual = document.getElementById("cifrar1");
	cifrarSmsActual.style.display = "none";
	let resultadoDelSms = document.getElementById("cifrar2");
	resultadoDelSms.style.display = "block";
	// Esta parte es de los textarea,cipher
const offset = parseInt(document.getElementById("offset").value);//->Esto es para el Offset
let texto = document.getElementById("textoCifrar1").value;
document.getElementById("resultado").innerHTML = cipher.encode (offset,texto);
 }
 //fin del cipher encode
 
  document.getElementById("clean").addEventListener("click",limpiar);
  function limpiar(){   

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
	let inicioSiguiente = document.getElementById("descifrar2");
	inicioSiguiente.style.display = "block";
	// Esta parte es de los textarea,cipher
	const offset1 = parseInt(document.getElementById("offset1").value);//->Esto es para el Offset
let texto1 = document.getElementById("textoDescifrar").value;
document.getElementById("resultado2").innerHTML = cipher.decode (offset1,texto1);
  }
   //fin del cipher decode

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