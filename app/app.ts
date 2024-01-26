import { NegociaçaoController } from "./controllers/negociaçaoController.js";

const control = new NegociaçaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    control.Adiciona();
}) 

const reset = document.getElementById('reset-btn');
reset.addEventListener("click", ()=>{
    control.LimparLista();
});
