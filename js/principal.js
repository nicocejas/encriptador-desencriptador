
//Inicializa variables
var reglas = [];
var div_reglas = document.querySelector("div.reglas");
reglas = actualizarReglas(div_reglas);
//setea reglas default
setReglasDefault();

//Captura Botones y areas de texto
var btn_encriptar = document.querySelector("#btn-encriptar");
var btn_desencriptar = document.querySelector("#btn-desencriptar");
var btn_copiar = document.querySelector("#btn-copiar");
var btn_limpiar = document.querySelector("#btn-limpiar");
var btn_guardar_reglas = document.querySelector("#guardar-reglas");
var btn_agregarRegla = document.querySelector("#agregar-regla");
var txt_usuario = document.querySelector("#txt-usuario");
var txt_resultado = document.querySelector("#txt-resultado");


//Linkea funciones con elementos
btn_encriptar.addEventListener("click", function(event){ 
    txt_resultado.value = encriptar(txt_usuario.value, reglas);
    event.preventDefault();
})

btn_desencriptar.addEventListener("click", function(event){
    txt_resultado.value = desencriptar(txt_usuario.value, reglas);
    event.preventDefault();
})

btn_limpiar.addEventListener("click", function(event){
    txt_resultado.value = "";
    event.preventDefault();
})

btn_guardar_reglas.addEventListener("click", function(event){
    reglas = actualizarReglas(div_reglas);
    console.log(reglas);
    event.preventDefault();
})

btn_copiar.addEventListener("click", function(event){
    navigator.clipboard.writeText(txt_resultado.value);
    event.preventDefault();
})

btn_agregarRegla.addEventListener("click", function(event){
    crearHtmlRegla(div_reglas);
    event.preventDefault();
})

//crear 5 reglas por default
function setReglasDefault() {
    // Setea las reglas por default
    var botones_eliminar = document.querySelectorAll(".eliminar-regla");
    for (let boton of botones_eliminar) {
    boton.addEventListener("click", function(event) {
                eliminarRegla(this.parentNode,  div_reglas)
                event.preventDefault();
                });
    }
}
