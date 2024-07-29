
//No se utiliza mucho
(() => {

    //Restringir una función
    interface AddTwoNumbers {
        (a: number, b: number): number; //Esto es una función
    }

    let addNumbersFunction: AddTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
        return 10;
    }


})()