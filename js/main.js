const $formulario = document.getElementById("carta-a-santa");
$formulario.onsubmit = validarForm;

// const nombre = $formulario.nombre.value;
//     const ciudad= $formulario.ciudad.value;
//     const comportamiento=  v$formulario.comportamiento.value;
//     const descripcionRegalo= $formulario["descripcion-regalo"].value;

function validarNombre(nombre){

    if(nombre.length === 0 ){
        return "El campo nombre debe tener al menos 1 caracter";
    }
    else if(nombre.length >= 50){
        return "El campo nombre debe ser menor a 50 caracteres";
    }
    else if(!/^[a-z]+$/i.test(nombre)){
        return "El campo nombre solo acepta letras";
    }
    return "";
}

function validarCiudad(ciudad){
    if (ciudad === ""){
        return "Debes seleccionar una ciudad";
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
    if(descripcionRegalo.length === 0){
        return "Debes escribir una descripcion del regalo";
    }
    if(descripcionRegalo.length >= 150){
        return "La descripcion del regalo debe ser menor a 150 caracteres";
    }
    else if(!/^[a-z0-9+$]/i.test(descripcionRegalo)){
        return "La descripcion del regalo solo puede tener letras y numeros"
    }
    return "";
}

function validarForm(event){
    const errorNombre = validarNombre($formulario.nombre.value);
    const errorCiudad= validarCiudad($formulario.ciudad.value);
    const ErrorDescripcionRegalo= validarDescripcionRegalo($formulario["descripcion-regalo"].value);

    const errors = {
        nombre: errorNombre,
        ciudad: errorCiudad,    
        'descripcion-regalo': ErrorDescripcionRegalo
    };
 
// si la funcion handleErrors retorna el valor 0(que es el contador de erorres) hace lo que esta dentro del if 
    if (handleErrors(errors) === 0 ){
        let $exito = document.getElementById("exito");
        $exito.className="";
        $formulario.className="oculto";
    }
    event.preventDefault();

}
function handleErrors(errors){

    const keys = Object.keys(errors);

//   Esto solo va a funcionar si [key] ,que es lo que esta dentro del objeto "errors"
//   tiene el mismo nombre que el name del atributo que quiero marcar como error
    let contador = 0;
    
    keys.forEach(function(key){
        let error = errors[key];
        if (error){
            let $textoErrores=document.getElementById("error-"+key);
            contador ++;
            $formulario[key].className="error";
            let nombreClase = "resultados-"+key
            if ( !document.getElementById(nombreClase)) {
                const $error = document.createElement("li");
                let nombre1 = "resultados-"+key
                $error.id=nombre1;
                $error.className=nombre1;
                $error.innerText = error;
                $textoErrores.appendChild($error);
            }
        }
        else{
            let nombre = ".resultados-"+key
            $formulario[key].className="";
            let $borrarError = document.querySelectorAll(nombre);
            $borrarError.forEach( function($borrarError){
                $borrarError.className = 'oculto'
            })
            
        }
        
    });
    return contador;
}