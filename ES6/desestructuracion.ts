(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true, 
        poder: 1500.9876,
    }

    //Desestructuración: consiste en tomar un objeto y sacar de él los elementos que nos interesan

    //*Desestructuración clásica:
    // const{ poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    //*Desestructurar el argumento de una funcion:
    //En vez de poner como argumento 'avengers', podemos desestructurarlo e indicar que queremos a 
    //ironman y el operador rest, que significa que queremos que se vea el resto de propiedades 
    //definidas en nuestro objeto.
    const printAvenger = ( { ironman, ...resto }: Avengers ) => {

        console.log( ironman, resto );
    }

    // printAvenger( avengers );

    //*Desestructuración de arreglos
    //FUnciona mejor si indicamos bien el tipo de las variables y elementos 
    
    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk' ];

    // Da igual el nombre que le pongamos a la desestructuración
    const [ , ironman, ] = avengersArr;
    // console.log({ironman})

})()