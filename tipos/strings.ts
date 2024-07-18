(() => {
//4 formas de definir strings

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Héroe: Volcán Negro`;

    console.log( `I'm ${ batman }` ); 
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No está batman');
    //Esto significa: si el 11º caracter de batman existe, entonces haz el toUpperCase.
    //Si no, no hagas nada
    

})();