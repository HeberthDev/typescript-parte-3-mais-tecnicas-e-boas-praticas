export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método ${propertyKey}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`--- retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
    };
}
