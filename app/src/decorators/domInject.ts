export function domInject(seletor:string) {
    return function(
        target:any, 
        key:string
    ) {
        const getter = function() {
            const element = document.querySelector(seletor);
            return element
        }

        Object.defineProperty(target, key, {get: getter});
        console.log(`input do elemento DOM (${seletor}) adicionado a variavel ${key}.`);
    }
}