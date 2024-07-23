"use strict";
(() => {
    //En los objetos, no pasa nada si la variable de age es opcional, y es seguido por una variable
    //obligatoria. 
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        //    age: 60, 
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
