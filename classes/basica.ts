//!Static: poder acceder a él sin crear instancias de la clase. 
//Solo se hace referencia a la clase. E.g. Avenger.getAvgAge(), en vez de ironman.getAvgAge()
//!Público: puedes acceder a él fuera de la clase
//!Private: solo puedes hacer cambios dentro de la clase

(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35; //no hace falta incluirla en el constructor
        static getAvgAge() {
            return this.name; //OJO! nombre de la clase!! 
        }

        //Esta es una forma muy común de hacer el constructor. Ahorramos tener que escribirlos
        //de la manera que indicamos originalmente (arriba)
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string
        ) { }
        //Con el constructor podemos acceder a las propiedades que son private y public
    
        
        public bio() {
            return `${ this.name } (${ this.team })`;
        }
    }


    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    // console.log(Avenger.avgAge)//Se puede acceder a los static de forma global, mencionando a la 
    //clase (Avenger) y a la propiedad (avgAge)

    console.log( antman.bio() );

})()