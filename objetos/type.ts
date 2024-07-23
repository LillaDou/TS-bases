(() => {

    //En TS, podemos crear un tipo. Con esto, podemos evitar poner el tipo de todos los elementos
    //que contiene. Queda más ordenado y es más fácil hacer cambios(cambiamos el tipo y ya nos indica todo
    //lo que hay que cambiar)
    type Hero ={
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


})()