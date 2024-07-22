"use strict";
(() => {
    //Si en la enumeración no ponemos números, el default es 0, 1, 2 (min, med, max) como
    //si fuera un arreglo normal.
    //Las enumeraciones son una forma de manejar números.
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    // let currentAudio: AudioLevel = 10; Esto es permitido, porque estamos insertando un número. 
    console.log(currentAudio);
    console.log(AudioLevel);
})();
