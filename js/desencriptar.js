function desencriptar(texto, reglas) {
    
    var texto_desencriptado = texto;
    
    for (let regla of reglas) {
        let expresion_regular = new RegExp(regla.codificacion, "g");
        console.log("Expresion regular: " + expresion_regular);
        texto_desencriptado = texto_desencriptado.replace(expresion_regular, regla.clave); 
    }
    
    return texto_desencriptado;
} 
