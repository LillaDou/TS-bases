"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction; //any!
    //Definimos el myFunction para que no sea de tipo any de las siguientes maneras:
    //let myFunction: Function -- este da error porque no es una función.
    //* myFunction = 10;
    //* console.log(myFunction);
    //let myFunction: (y: number, z: number) => number; Es una función con estructura como la de addNumber
    //? myFunction = addNumbers; //mandamos la referencia, no la ejecutamos, por lo que no ponemos los ()
    //? console.log( myFunction( 1, 2 ) );
    //let myFunction: (y: string) => string; Función como la de greet
    //* myFunction = greet;
    //* console.log( myFunction( 'Fernando' ) );
    //let myFunction: () => string; Función como la de saveTheWorld
    //? myFunction = saveTheWorld;
    //? console.log( myFunction( ) );
})();
