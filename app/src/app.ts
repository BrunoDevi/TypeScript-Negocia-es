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

const reset = document.getElementById('reset-btn') as HTMLInputElement;
reset.addEventListener("click", ()=>{
    control.LimparLista();
});
