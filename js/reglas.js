// Funciones sobre reglas


function actualizarReglas(div_reglas) {
    var reglasHTML = div_reglas.querySelectorAll("div.regla");
    var reglas = [];
    var numero_regla = 0;
    var erroresHTML = document.querySelector("#erroresHTML");
    erroresHTML.innerHTML = "";
    if (validaReglas()) {
    for (let regla of reglasHTML) {
        ++numero_regla;
        reglas.push(nuevaRegla(regla.querySelector("select").value,
                               regla.querySelector("input").value,
                               numero_regla)
                    );
    }
    
    return reglas;}
}

function validaReglas() {
    var reglasHTML = div_reglas.querySelectorAll("div.regla");
    var erroresHTML = document.querySelector("#erroresHTML");
    var claves = [];
    var codificaciones = [];
    var sin_errores = true;
    for (let regla of reglasHTML) {
        claves.push(regla.querySelector("select").value);
    }
    console.log("claves: " + claves);
 
    for (let regla of reglasHTML) {
        codificaciones.push(regla.querySelector("input").value);
    }

    if (encuentraDuplicados(claves)) {
        console.log("encunetra duplocados true detectado");
        sin_errores = false;        erroresHTML.classList.remove("oculto");
        let duplicadoHTML = document.createElement("p");
        duplicadoHTML.textContent = "Lo siento, no puede haber letras duplicadas";
        erroresHTML.appendChild(duplicadoHTML);
    }
    if (encuentraNumCodificacion(codificaciones)) {
        sin_errores = false;
        erroresHTML.classList.remove("oculto");
        let numcodHTML = document.createElement("p")
        numcodHTML.textContent = "Lo siento, no puede haber números en las codificaciones";
        erroresHTML.appendChild(numcodHTML);
    }
    if (encuentraCodificacionVacia(codificaciones)) {
        sin_errores = false;
        erroresHTML.classList.remove("oculto");
        let codifVaciaHTML = document.createElement("p");
        codifVaciaHTML.textContent = "Lo siento, no puede haber codificaciones vacias";
        erroresHTML.appendChild(codifVaciaHTML);
    }
    
    return sin_errores;
    
    
}

function encuentraNumCodificacion(codificaciones) {
    var contiene_numero = /\d/;
    var codificaciones_string = codificaciones.toString();
    if (contiene_numero.test(codificaciones_string)) {
        return true;
    } else {return false;}
}

function encuentraCodificacionVacia(codificaciones) {
    var vacia = false;
    codificaciones.forEach(function(codificacion) {
        if (codificacion == "") {
           vacia = true;
        } 
    });
    if (vacia == true) {return vacia} else {return false};
}

function encuentraDuplicados(array) {
    var cuenta = {};
    var duplicados = false;
    //valida si se repiten letras
    for (let letra of array) {
        if (cuenta[letra]) {
            cuenta[letra] += 1;
        } else {
            cuenta[letra] = 1;
        }
    }
    
    Object.keys(cuenta).forEach(function(key, index) {

        if (cuenta[key] > 1) {
            duplicados = true;
        } else {
            duplicados = false;
        }
    });
    var cuenta = {};
    return duplicados;
    
}


function nuevaRegla(clave, decodificacion, id) {
    var regla = new reglaObj(clave, decodificacion, id)
    return regla;
}

function eliminarRegla(regla, div_reglas) {
    console.log(regla);
    regla.remove();
}

function crearHtmlRegla(div_reglas) {
        var letras = "abcdefghijklmnopqrstuvwxyz".split('');
        var reglasHTML = div_reglas.querySelectorAll("div.regla");
        var numero_regla = (reglasHTML.length + 1);
        var div_regla = document.createElement("div");
        div_regla.classList.add("regla");
        div_regla.id = ("regla-" + numero_regla);
        var regla_select = document.createElement("select");
        regla_select.name = ("clave-" + numero_regla);
        regla_select.id = regla_select.name;
        var codificacion = document.createElement("input");
        codificacion.classList.add("codificacion");
        codificacion.id = ("cod-regla-" + numero_regla);
        codificacion.type = "text";
        var boton_eliminar = document.createElement("button");
        boton_eliminar.classList.add("btn", "eliminar-regla");
        boton_eliminar.id = ("eliminar-regla-" + numero_regla);
        boton_eliminar.textContent = "Eliminar";
        boton_eliminar.addEventListener("click", function(event) {
            eliminarRegla(div_regla,  div_reglas)
            event.preventDefault();
        });
        
        //construye los options con letras del abcdario
        letras.forEach(function(letra) {
            let option = document.createElement("option");
            option.value = letra;
            option.textContent = letra;
            regla_select.appendChild(option);
        })
        
        div_regla.appendChild(regla_select);
        div_regla.appendChild(document.createElement("p"));
        div_regla.querySelector("p").textContent = "------>";
        div_regla.appendChild(codificacion);
        div_regla.appendChild(boton_eliminar);
        div_reglas.appendChild(div_regla);
}

class reglaObj {
    constructor(clave, codificacion, id){
        this.clave = clave;
        this.codificacion = codificacion;
        this.id = id;
    }
}
