


(() => {

    interface Xmen {
        name: string, 
        realName: string, 
        mutantPower( id: number ): string,
    }

    interface Human {
        age: number, 
    }

    //Como aplicar las interfaces con clases: usamos el implements!
    class Mutant implements Xmen, Human {
        public age: number = 0;
        public name: string = 'Wolverine';
        public realName: string = 'Logan';

        mutantPower(id: number): string {
            return this.name + ' ' + this.realName;
        }
    }



})()