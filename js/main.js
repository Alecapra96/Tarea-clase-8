const $formulario = document.getElementById("carta-a-santa");
$formulario.onsubmit = validarForm;




function validarNombre(nombre){

    if(nombre.length === 0 ){
        return "este campo debe tener al menos 1 caracter";
    }
    else if(nombre.length >= 50){
        return "este campo debe ser menor a 50 caracteres";
    }
    
    return "";
    
}
function validarCiudad(ciudad){
    if (ciudad === ""){
        return "debes seleccionar algo";
    }
    return "";
}
function validarComportamiento(comportamiento){
    if (comportamiento === ""){
        return "debes seleccionar algo";
    }
    return "";
}
function validarDescripcionRegalo(descripcionRegalo){
    if(!/^[a-z0-9]+$]/i.test(descripcionRegalo)){
        return "el campo solo puede tener letras y numeros"
    }
    else if(descripcionRegalo.length >= 150){
        return "este campo debe ser menor a 150 caracteres";
    }
    return "";
}

function validarForm(e){
    const nombre = $formulario.nombre.value;
    const ciudad= $formulario.ciudad.value;
    const comportamiento= $formulario.comportamiento.value;
    const descripcionRegalo= $formulario["descripcion-regalo"].value;
    e.preventDefault();
}