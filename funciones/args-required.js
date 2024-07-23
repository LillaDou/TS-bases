"use strict";
(() => {
    //Indicamos que los argumentos que mandamos a la función son de tipo String. 
    //Si no lo indicamos, nos indica que es de tipo ANY, y hay que evitar eso lo max posible
    //Con esto, no hace falta hacer tantas validaciones como en JS, porque TS ya lo hace por nosotros
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map