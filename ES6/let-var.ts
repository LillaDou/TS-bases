(() => {

    // console.log('let');

    //* Se recomienda trabajar siempre con constantes hasta que sepamos que va a cambiar. En 
    //* ese caso lo cambiamos a let

    const nombre = 'Fernando';

    const getName = () => {
        console.log('Viejo getName');
    }

    // getName = () => {console.log('Nuevo getName')};

    // getName();

})()