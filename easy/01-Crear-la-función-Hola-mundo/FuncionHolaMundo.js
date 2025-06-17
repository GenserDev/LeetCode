//2667. Crear la función Hola mundo

// Escribe una función  createHelloWorld. Debe devolver una nueva función que siempre devuelva  "Hello World".

// Ejemplo 1:

// Entrada: args = []
//  Salida: "Hola mundo"
//  Explicación:
// const f = crearHolaMundo();
// f(); // "Hola mundo"

// La función devuelta por createHelloWorld siempre debe devolver "Hola Mundo".
// Ejemplo 2:

// Entrada: args = [{},null,42]
//  Salida: "Hola mundo"
//  Explicación:
// const f = crearHolaMundo();
// f({}, null, 42); // "Hola mundo"

// Se puede pasar cualquier argumento a la función, pero siempre debería devolver "Hola mundo".

function createHelloWorld() {
    return function() {
        return "Hello World";
    }
}

createHelloWorld()