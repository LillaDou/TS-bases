"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    //Consola: NaN (Not a Number) Esto en JS es un número
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map