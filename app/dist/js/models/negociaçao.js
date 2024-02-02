export class Negociaçao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    static Criar(dataInput, qtnInput, valorInput) {
        const exp = /-/g;
        const date = new Date(dataInput.replace(exp, ","));
        const quantidade = parseInt(qtnInput);
        const valor = parseFloat(valorInput);
        return new Negociaçao(date, quantidade, valor);
    }
}
