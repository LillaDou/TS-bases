
(() => {

    class Avenger {

        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35; 

        constructor( name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        //Con el constructor podemos acceder a las propiedades que son private y public
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan');
    console.log(antman);
    // console.log(Avenger.avgAge)//Se puede acceder a los static de forma global, mencionando a la 
    //clase (Avenger) y a la propiedad (avgAge)

})()