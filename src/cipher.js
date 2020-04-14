const cipher = {
  // ...
  
    //Cifrar
    encode: (offset,texto) => {
      let resul = "";
      let x;
      let inCode = "";
      
      for (x = 0; x < texto.length; x++) {
        if (texto.charCodeAt(x)>=65 && texto.charCodeAt(x)<=90){
          inCode= (((texto.charCodeAt(x)-65)+offset)%26)+65;
        }else if (texto.charCodeAt(x)>= 97 && texto.charCodeAt(x)<= 122){
        inCode = String.fromCharCode((texto.charCodeAt(x)- 97 + offset)% 26 + 97);
        resul += inCode;
      }else if (texto.charCodeAt(x) === 164){
        texto.charCodeAt(x) = ((texto.charCodeAt(x)- 164 + offset)% 1 + 164);
          inCode = String.fromCharCode(texto.charCodeAt(x));
          resul += inCode;
      }else if(texto.charCodeAt(x)===32){
        inCode= 32;
      }resul += String.fromCharCode(inCode);
    }
    return resul;
    },
    //Descifrar
    
    decode: (offset1,texto1) => {
    
      let resul1 = "";
      let x;
      let inCode1 = "";
      
      
      for (x = 0; x < texto1.length; x++) {
        
        if (texto1.charCodeAt(x)>=65 && texto1.charCodeAt(x)<=90){
          inCode1= (((texto1.charCodeAt(x)-65)-offset1)%26)+65;
        }else if (texto1.charCodeAt(x)>= 97 && texto1.charCodeAt(x)<= 122){
        inCode1 = String.fromCharCode((texto1.charCodeAt(x)- 97 - offset1)% 26 + 97);
        resul1 += inCode1;	
      }else if(texto1.charCodeAt(x)===164){
        inCode1= 164;
      }else if(texto1.charCodeAt(x)===32){
        inCode1= 32;
      }
        resul1 += String.fromCharCode(inCode1);
       }
       return resul1;
     }   
};

export default cipher;
