//Las interfaces son muy similares a los type. Ambos no son visibles en el doc de JS
//Están hechas para restringir cómo lucen nuestros objetos (como los tipos), e indican
//el tipado. No son como las clases, donde podemos definir cómo va a implementarse un método

//Los tipos e interfaces se pueden utilizar en muchos casos para lo mismo.
//La diferencia entre ellos es que las interfaces pueden ser extendibles, mientras
//que los tipos no. Un tipo no puede expandirse - una vez lo creamos, se queda así. 
//Una interfaz si se puede extender, añadirle cosas,... es como una clase pero no define el 
//comportamiento.

//Las interfaces se utilizan mucho para las peticiones de HTTP

//*Diferencia visual entre una interface y un tipo:
//*Tipo: type Hero = {}
//*Interface: interface Hero {} (Como una clase)

(() => {

    interface Hero {
        name: string, 
        age?: number, 
        powers: number[],
        getName?: () => string,
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],

    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }

    


})();