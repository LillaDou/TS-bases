//! Private: solo puedo acceder al método o variable dentro de su propia clase. 
//! Protected: podemos acceder, dentro de una clase, a métodos y variables de la clase de la cual se extiende 

(() => {

    class Avenger {
        constructor(
            public name: string, 
            public realName: string,
        ) {
            // console.log('Constructor Avenger llamado!');
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
            // console.log('Constructor Xmen llamado!');
    
        }

        //No recibe un argumento, debe regresar algo
        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        //Debe recibir UN argumento, no tiene return
        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }

            this.name = name;
        }

        getFullnameDesdeXmen(){
            console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine.fullName);
    //Los get no se ejecutan como un método(con () ). Solo se mandan a llamar

    // wolverine.getFullnameDesdeXmen();

    wolverine.fullName = 'Fernando'; //Esto es lo que sucede con el SET
    // console.log(wolverine.fullName);

    
})()