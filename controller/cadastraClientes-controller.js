import { clienteService } from "../service/cliente-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.querySelector('[data-nome]').value;
    const email = e.target.querySelector('[data-email]').value;

    clienteService.createClient(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
});