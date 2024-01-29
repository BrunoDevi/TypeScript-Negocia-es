import { NegociaçaoController } from "./controllers/negociaçaoController.js";

const control = new NegociaçaoController();
const form = document.querySelector('.form') as HTMLElement;
form.addEventListener('submit', event => {
    event.preventDefault();
    control.Adiciona();
}) 

const reset = document.getElementById('reset-btn') as HTMLInputElement;
reset.addEventListener("click", ()=>{
    control.LimparLista();
});
