const cipher = {
  // ...
  
    //Cifrar
    encode: (offset,texto) => {
      let resul = "";
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
      }resul += String.fromCharCode(inCode);
    }
    return resul;
    },
    //Descifrar
    
    decode: (offset1,texto) => {
    
let resul = "";
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
	resul += String.fromCharCode(inCode);
       }
       return resul;
     }   
};

export default cipher;
