


//Creamos una función anónima autoinvocada para poder crear archivos que 
//no están vinculados entre sí. De esta manera evitamos notificaciones de error en TS
(() => {

    const a:number = 10; // 10 - el valor de a siempre será 10 - no se puede cambiar al ser un const
    let b:number = 10; // number - se puede cambiar, b es un tipo número

    console.log(a);

})()