
(() => {

    // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; //arreglo de numbers o string, o boolean
    // numbers.push('true');//Acepta tanto un string como un number, y un booleano si lo indicamos en el const

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    villains.forEach( v => console.log( v.toUpperCase ) );

})();