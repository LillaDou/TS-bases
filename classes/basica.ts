
(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35; //no hace falta incluirla en el constructor

        //Esta es una forma muy común de hacer el constructor. Ahorramos tener que escribirlos
        //de la manera que indicamos originalmente (arriba)
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string
        ) { }
        //Con el constructor podemos acceder a las propiedades que son private y public
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    // console.log(Avenger.avgAge)//Se puede acceder a los static de forma global, mencionando a la 
    //clase (Avenger) y a la propiedad (avgAge)

})()