var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociaçoes } from "../models/negociaçoes.js";
import { Negociaçao } from "../models/negociaçao.js";
import { NegociaçoesView } from "../views/negociaçoes-view.js";
import { MensagemView } from "../views/mensagen-view.js";
import { LogarTempoDeExecução } from "../models/logar-tempo-de-execução.js";
export class NegociaçaoController {
    constructor() {
        this.negociaçoes = new Negociaçoes();
        this.NegociaçaoViwer = new NegociaçoesView('#negociaçoes-view', true);
        this.MensagemViwer = new MensagemView('#mensagemView');
        this.diasUteis = [1, 2, 3, 4, 5];
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.NegociaçaoViwer.update(this.negociaçoes);
    }
    Adiciona() {
        const negociaçao = Negociaçao.Criar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
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
        this.negociaçoes.Reset();
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
__decorate([
    LogarTempoDeExecução(true)
], NegociaçaoController.prototype, "Adiciona", null);
