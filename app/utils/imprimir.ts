export function imprimir( ...objetos: any[] ) {
    objetos.forEach( objeto => {
        console.log( objeto.paraTexto() );
    })
}