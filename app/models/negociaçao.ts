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
}
