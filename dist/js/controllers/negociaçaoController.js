import { Negociaçoes } from "../models/negociaçoes.js";
import { Negociaçao } from "../models/negociaçao.js";
import { NegociaçoesView } from "../views/negociaçoes-view.js";
import { MensagemView } from "../views/mensagen-view.js";
export class NegociaçaoController {
    constructor() {
        this.negociaçoes = new Negociaçoes();
        this.NegociaçaoViwer = new NegociaçoesView('#negociaçoes-view');
        this.MensagemViwer = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.NegociaçaoViwer.update(this.negociaçoes);
    }
    Adiciona() {
        const negociaçao = this.CriarNegociaçao();
        this.negociaçoes.Adicionar(negociaçao);
        this.NegociaçaoViwer.update(this.negociaçoes);
        this.MensagemViwer.update("Negociação Registrada com Sucesso!!");
        this.LimparFormulario();
        setInterval(() => {
            this.MensagemViwer.MsgOff();
        }, 2000);
    }
    Remover(index) {
        this.negociaçoes.Remover(index);
    }
    CriarNegociaçao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociaçao(date, quantidade, valor);
    }
    LimparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
