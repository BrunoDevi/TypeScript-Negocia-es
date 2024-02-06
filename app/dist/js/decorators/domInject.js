export function domInject(seletor) {
    return function (target, key) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
            }
            return element;
        };
        Object.defineProperty(target, key, { get: getter });
        console.log(`input do elemento DOM (${seletor}) adicionado a variavel ${key}.`);
    };
}
