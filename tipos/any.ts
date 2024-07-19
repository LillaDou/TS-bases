
//!No se recomienda usar el tipo any!
//Por un lado, no nos aparece la ayuda de los métodos a la hora de poner un '.'

(() => {

    let avenger: any = 123;
    let exists; 
    let power;

    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0));
    //'Character at the position 0 = D
    console.log( (avenger as string).charAt(0) ); //Esto es un casting.
    //Al ser avenger un tipo any, le estamos diciendo que trate ahora al avenger como un string,
    //para poder aplicarle el método charAt. Además, nos aparece la ayuda de los métodos disponibles. 


    avenger = 150.34857454;
    console.log( <number>avenger.toFixed(2) );// Otra forma de hacer el casting

    console.log(exists);
    console.log(power);

})()