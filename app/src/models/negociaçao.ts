export class Negociaçao{
    constructor(
        public readonly _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor: number
    ){}

    get volume(): number {
        return this._quantidade * this._valor
    }

    get data(){
        return this._data
    }
    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }

    public static Criar(dataInput: string, qtnInput: string, valorInput: string): Negociaçao{
        const exp = /-/g
        const date = new Date(dataInput.replace(exp, ","));
        const quantidade = parseInt(qtnInput);
        const valor = parseFloat(valorInput);
        return new Negociaçao (date, quantidade, valor)
    }
}
