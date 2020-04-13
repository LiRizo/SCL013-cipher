const cipher = {
  // ...
  
    //Cifrar
    encode: (offset,escrito,) => {
    let resul = "";
    let x;
    let inCode = "";
    let inCode1 = "";
    
    for (x = 0; x < escrito.length; x++) {
      
      if (escrito.charCodeAt(x)>=65 && escrito.charCodeAt(x)<=90){
        inCode= (((escrito.charCodeAt(x)-65)+offset)%26)+65;
      }else if (escrito.charCodeAt(x)>= 97 && escrito.charCodeAt(x)<= 122){
      inCode = String.fromCharCode((escrito.charCodeAt(x)- 97 + offset)% 26 + 97);
      resul += inCode;
    }else if (escrito.charCodeAt(x) === 164){
      escrito.charCodeAt(x) = ((escrito.charCodeAt(x)- 164 + offset)% 1 + 164);
        inCode1 = String.fromCharCode(escrito.charCodeAt(x));
        resul += inCode1;
    }else if(escrito.charCodeAt(x)===32){
      inCode= 32;
    }
      resul += String.fromCharCode(inCode);
    }
    return resul;
    },
    //Descifrar
    
    decode: (offset1,escrito) => {
    
      let resul = "";
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
        resul += String.fromCharCode(inCode);
       }
       return resul;
     }   
};

export default cipher;
