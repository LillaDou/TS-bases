"use strict";
//!Una tupla indica, usando el ejemplo de hero, que siempre habrán dos
//!elementos que serán primero un string, y luego un number. 
//!Se indica con [] y dentro se especifica el tipo
//!Ventaja: podemos controlar valores, qué tipo de datos y cómo luce la constante. 
//! Pueden haber más de dos valores. 
(() => {
    const hero = ['Dr Strange', 100, true];
    // hero[0] = 50; //Esto no lo acepta porque en la posición 0 debe haber un string, y no 
    //un number.
    hero[0] = 'IronMan'; //string
    hero[1] = 50; //number
    hero[2] = false; //boolean
    console.log(hero);
})();
//# sourceMappingURL=tuples.js.map