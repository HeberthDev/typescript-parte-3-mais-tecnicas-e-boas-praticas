export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Método ${propertyKey}`);
            const retorno = metodoOriginal.apply( this, args );
            console.log(`--- retorno: ${JSON.stringify( retorno )}`)
            return retorno;
        }
    }
}