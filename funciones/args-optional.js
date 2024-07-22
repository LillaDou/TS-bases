"use strict";
(() => {
    //LA interrogación permite indicar que ese dato puede o no estar. 
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
