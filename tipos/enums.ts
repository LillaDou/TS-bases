(() => {

    //Si en la enumeración no ponemos números, el default es 0, 1, 2 (min, med, max) como
    //si fuera un arreglo normal.

    //Las enumeraciones son una forma de manejar números.
    enum AudioLevel {
        min = 1,
        medium, 
        max = 10
    }

    let currentAudio = AudioLevel.max;
    // let currentAudio: AudioLevel = 10; Esto es permitido, porque estamos insertando un número. 

    console.log(currentAudio);
    console.log(AudioLevel);


})();