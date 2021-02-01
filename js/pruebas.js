function probarCartaPapaNoel() {
    console.assert(validarNombre('') === 'este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
            "este campo debe ser menor a 50 caracteres",
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarCiudad('') ===
        'debes seleccionar algo',
        'ValidarCiudad no validó que el nombre no sea vacío',
    );
    console.assert(
        validarComportamiento('') ===
        'debes seleccionar algo',
        'ValidarComportamiento no validó que al menos un iten este seleccionado',
    );
    console.assert(
        validarDescripcionRegalo('') === "el campo solo puede tener letras y numeros",
        'ValidarDescripcionRegalo no validó que la descripcion no sea vacíoo tenga otra cosa que no sea letra y numero',
    );
    console.assert(
        validarDescripcionRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
            "este campo debe ser menor a 150 caracteres",
        'ValidarDescripcionRegalo no validó que la descripcion sea menor a 150 caracteres',
    );
    
    
  }
 probarCartaPapaNoel();