export function escape(target, key, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retornoOriginal = metodoOriginal.apply(this, args);
        if (typeof retornoOriginal === 'string') {
            console.log(`@escape Aplicado na classe: ${this.constructor.name}, no método: ${key}`);
            retornoOriginal.replace(/<script>[\s\S]*?<script>/, '');
            this.retornoNovo = retornoOriginal;
        }
        if (this.retornoNovo && retornoOriginal != this.retornoNovo) {
            console.log(`@escape identificou e removeu um script não outorizado!`);
        }
        else {
            console.log('@escape não foi nescessario neste metodo.');
        }
        return retornoOriginal;
    };
    return descriptor;
}
