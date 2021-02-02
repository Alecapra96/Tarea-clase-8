function probarCartaPapaNoel() {
    console.assert(validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
            "El campo nombre debe ser menor a 50 caracteres",
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarCiudad('') ===
        'Debes seleccionar una ciudad',
        'ValidarCiudad no validó que el nombre no sea vacío',
    );
    console.assert(
        validarComportamiento('') ===
        'debes seleccionar algo',
        'ValidarComportamiento no validó que al menos un iten este seleccionado',
    );
    console.assert(
        validarDescripcionRegalo('') === "Debes escribir una descripcion del regalo",
        'ValidarDescripcionRegalo no validó que la descripcion no sea vacío tenga otra cosa que no sea letra y numero',
    );
    console.assert(
        validarDescripcionRegalo('------') === "La descripcion del regalo solo puede tener letras y numeros",
        'ValidarDescripcionRegalo no validó que la descripcion no sea vacío tenga otra cosa que no sea letra y numero',
    );
    console.assert(
        validarDescripcionRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
            "La descripcion del regalo debe ser menor a 150 caracteres",
        'ValidarDescripcionRegalo no validó que la descripcion sea menor a 150 caracteres',
    );
    
    
  }
 probarCartaPapaNoel();