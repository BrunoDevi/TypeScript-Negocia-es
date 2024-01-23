export class Negociaçoes {
    constructor() {
        this.negociaçoes = [];
    }
    Adicionar(negociaçao) {
        this.negociaçoes.push(negociaçao);
    }
    Remover(index) {
        this.negociaçoes.splice(index);
    }
    Lista() {
        return this.negociaçoes;
    }
}
