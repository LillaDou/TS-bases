// Las clases abstractas sirven para crear otras clases, o para asegurarnos de que otras
// clases implementan lo que nosotros esperamos. 
// No podemos crear una instancia de una clase abstracta



(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}

    }

    //Las clases extendidas de la clase abstracta pueden tener sus propios métodos.

    class Xmen extends Mutante {

        salvarMundo(){
            return 'Mundo a salvo';
        }
    };
    class Villain extends Mutante {

        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }


    const wolverine = new Xmen ('Wolverine', 'Logan');
    const magneto = new Villain ('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo())

    //Podemos crear una función cuyo argumento sea de tipo Mutante, como la clase abstracta. 
    //Siempre y cuando la variable que llamemos (wolverine) sea extendido de la clase abstracta
    //(Wolverine es una instancia de XMen, que a su vez fue extendido de la clase abstracta Mutante)
    //Si Xmen fuese una clase nueva (no extendida), entonces llamar a wolverine con printName daría error
    const printName = (character : Mutante) => {
        console.log( character.realName );
    }

    printName( wolverine );
})()