"use strict";
(() => {
    //Una variable puede tener varios tipos, incluyendo el personalizado que hemos creado (Hero)
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable); //String
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); //Number
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable); //En consola, es de tipo Object
})();
//# sourceMappingURL=union-types.js.map