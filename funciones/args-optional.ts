
(() => {
//La interrogación permite indicar que ese dato puede o no estar, por lo que se vuelve algo opcional. 
//Los argumentos opcionales deben ser indicados siempre al final. No puede haber un argumento
//obligatorio después de uno opcional
    const fullName = (firstName: string, lastName?: string): string => {

        return `${ firstName } ${ lastName || '----' }`;
    }

    const name = fullName( 'Tony' );

    console.log({ name });

})();