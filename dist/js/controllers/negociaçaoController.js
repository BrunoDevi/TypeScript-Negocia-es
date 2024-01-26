import { Negociaçoes } from "../models/negociaçoes.js";
import { Negociaçao } from "../models/negociaçao.js";
import { NegociaçoesView } from "../views/negociaçoes-view.js";
import { MensagemView } from "../views/mensagen-view.js";
export class NegociaçaoController {
    constructor() {
        this.negociaçoes = new Negociaçoes();
        this.NegociaçaoViwer = new NegociaçoesView('#negociaçoes-view');
        this.MensagemViwer = new MensagemView('#mensagemView');
        this.diasUteis = [1, 2, 3, 4, 5];
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.NegociaçaoViwer.update(this.negociaçoes);
    }
    Adiciona() {
        const negociaçao = this.CriarNegociaçao();
        const diaDaSemana = negociaçao.data.getDay();
        if (this.diasUteis.includes(diaDaSemana)) {
            this.negociaçoes.Adicionar(negociaçao);
            this.LimparFormulario();
            this.AtualizaView();
        }
        else {
            this.MensagemViwer.update('Só é possivel realizar Negociações em dias uteis.');
        }
        setInterval(() => { this.MensagemViwer.AlertOff(); }, 8000);
    }
    LimparLista() {
        this.NegociaçaoViwer.reset();
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
    AtualizaView() {
        this.NegociaçaoViwer.update(this.negociaçoes);
        this.MensagemViwer.update("Negociação Registrada com Sucesso!!");
    }
}
