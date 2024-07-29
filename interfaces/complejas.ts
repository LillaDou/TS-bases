
//Es recomendable que las interfaces no tengan más objetos anidados dentro. 
//Por ello, siempre que queramos añadir más detalles como el address, se crea una interface
//extra debajo y se indica el tipado (ej. address: Address)

//Las interfaces no tienen contrapartes de JS.

//al igual que los tipos, podemos añadir métodos en interfaces. 

(() => {

    interface Client {
        name: string, 
        age?: number, 
        address: Address,
        // address?: {
        //     id: number, 
        //     zip: string,
        //     city: string,
        // }
        //El address puede ser opcional, pero si se define el address, es obligatorio poner el resto
        //de elementos dentro
        getFullAddress( id: string ): void,//Es lo mismo que getFullAddress( id: string )=> void,
        //La interface no implementa el método, solo indica cómo se debe ver. La clase se encarga de implementar el método.
    }

    interface Address {
        id: number, 
        zip: string,
        city: string,
    }

    const client: Client = {
        name: 'Lilla',
        age: 26,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KS2 USA',
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

})()