import { Implimivel } from "./imprimivel.js";

export function imprimir( ...objetos: Implimivel[] ) {
    objetos.forEach( objeto => {
        console.log( objeto.paraTexto() );
    })
}