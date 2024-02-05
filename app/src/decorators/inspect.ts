export function Inspect(){
    return function(
        target: any,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`--- Método: ${key}`);
            console.log(`----- Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`----- Retorno: ${JSON.stringify(retorno)}`);
            return retorno
        }

        return descriptor
    }
}