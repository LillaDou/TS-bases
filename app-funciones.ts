(() => {

    // Funciones Básicas
  function sumar( a: number, b: number ): number{
    return a + b;
  }

  const contar = ( heroes: string[] ): number => {
    return heroes.length;
  }
  const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = ( llamar: boolean = false ): void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  //Si no regresa nada la función, es de tipo void

  llamarBatman();



  // Rest?
  const unirheroes = ( ...personas: string[] ): string => {
    return personas.join(", ");
  }


  // Tipo funcion
  const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] )=> {}

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: string[]) => void;
  noHaceNadaTampoco = noHaceNada;

})()


