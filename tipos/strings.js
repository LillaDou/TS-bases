"use strict";
(() => {
    //4 formas de definir strings
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe: Volcán Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está batman');
    //Esto significa: si el 11º caracter de batman existe, entonces haz el toUpperCase.
    //Si no, no hagas nada
})();
//# sourceMappingURL=strings.js.map