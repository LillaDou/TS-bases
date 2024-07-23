"use strict";
(() => {
    //! Operador Rest: son los ... que hemos puesto como argumentos en la función, mas el nombre que le ponemos. 
    // Es originalmente de type any[], por lo que debemos indicar el tipo que queremos que sea. 
    // En este ejemplo nos indica que el firstName es obligatorio siempre, pero el resto de 
    // argumentos que añadamos (Joseph, Kent...) serán flexibles. Es decir, si cambian o se añaden más nombres
    // no pasa nada, se añadirán en consola por el .join(' '). 
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map