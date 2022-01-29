/*Función que devuelve el texto_cliente encriptado según las reglas del desafío*/

function encriptar(texto, reglas) {
    
    var texto_encriptado = "";
    
    for (let letra of texto) {
        var codificacion = encuentraLetraEnClaves(letra, reglas);
        if (!codificacion == false) {
            texto_encriptado += codificacion;
            continue;
        };
        
        texto_encriptado += letra;
    };
    return texto_encriptado;
    
    
    function encuentraLetraEnClaves(letra, reglas) {
        for ( let regla of reglas) {
            if (letra == regla.clave){
                return regla.codificacion;
            };
        };
        return false;
    };
    
}; 

