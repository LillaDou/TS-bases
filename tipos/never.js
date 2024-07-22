"use strict";
(() => {
    //El never significa que mi función no debe de terminar excitosamente
    //No tiene que tener un punto alcanzable al realizarse
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    //O da error, y por lo tanto es un never, o regresa un número. 
    error('Auxilio'); //Tras esto, el código no se sigue ejecutando. 
    console.log('Hola Mundo'); //Ya no se ejecuta por la función de error
})();
