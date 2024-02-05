export function escape(target, key, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape Aplicado na classe: ${this.constructor.name}, no método: ${key}`);
            retorno.replace(/<script>[\s\S]*?<script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
