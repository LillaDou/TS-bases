(() => {

    //!Un constructor privado sirve para controlar la manera en la cual nuestras instancias 
    //!son ejecutadas. Por ejemplo, con singletons (este ejemplo)

    //!Podemos acceder al constructor SOLO desde dentro de la clase, por lo que 
    //!las instancias de la clase se crearán desde dentro


    class Apocalipsis {

        static instance: Apocalipsis;//La primera vez que se llama, es nulo

        private constructor( public name: string ){

        }

        //Va a regresar una instancia de Apocalipsis
        //Si no hay una instancia de Apocalipsis, entonces crea una nueva instancia,
        //haciendo referencia a nuestra variable estática instance. 
        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis, el único');
            }
            return Apocalipsis.instance;
        }

        //Si queremos darle un nuevo nombre, todas las instancias nuevas cambiarán y serán
        //iguales
        changeName( newName: string ):void {
            this.name = newName;
        }
    }

    //Llamamos al método estático callApocalipsis que debería de regresar una nueva instancia de Apocalipsis
    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()
    // Estos van a crear la misma instancia

    apocalipsis1.changeName('Xavier');
    //Todas las instancias del console log tendrán el nombre de Xavier, no solo el 
    //apocalipsis1

    //*Así no se crean nuevas instancias de nuestra clase:
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');


    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()