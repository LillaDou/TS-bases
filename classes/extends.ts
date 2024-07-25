//!Private: solo puedo acceder al método o variable dentro de su propia clase. 
//!Protected: podemos acceder, dentro de una clase, a métodos y variables de la clase de la cual se extiende 

(() => {

    class Avenger {
        constructor(
            public name: string, 
            public realName: string,
        ) {
            console.log('Constructor Avenger llamado!');
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string, 
            realName: string,
            public isMutant: boolean,
        ){
            super( name, realName );//Super se debe llamar ASAP
            console.log('Constructor Xmen llamado!');
    
        }

        getFullnameDesdeXmen(){
            console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();

    const nuevoAvenger = new Avenger('Hola', 'Mundo');
})()