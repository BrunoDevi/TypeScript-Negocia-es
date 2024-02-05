export function LogarTempoDeExecução(MiliSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let multiplicador = 1000;
            let medida = 'segundos'
            if(MiliSegundos){
                multiplicador = 1;
                medida = 'milisegundos'
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Metodo: ${propertyKey}, tempo de execução: ${(t1 - t2)/multiplicador} ${medida}`);
            return retorno
        }
        return descriptor;
    }
}