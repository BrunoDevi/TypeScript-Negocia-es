import { NegociaçaoController } from "./controllers/negociaçaoController.js";

const control = new NegociaçaoController();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        control.Adiciona();
    }); 
} else {
    throw Error('Não é possivel realizar o  Registro. Formulario não existente!');
}

const resetBtn = document.querySelector('#reset-btn') as HTMLInputElement;
resetBtn.addEventListener("click", ()=>{
    control.LimparLista();
});

const importBtn = document.querySelector('#import-btn') as HTMLButtonElement;
if(importBtn){
    importBtn.addEventListener('click', () => {
        control.importData();
    });
} else {
    throw Error('Botão não encontrado');
}
