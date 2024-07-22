
(() => {
//LA interrogación permite indicar que ese dato puede o no estar. 
    const fullName = (firstName: string, lastName?: string): string => {

        return `${ firstName } ${ lastName || '----' }`;
    }

    const name = fullName( 'Tony' );

    console.log({ name });

})();