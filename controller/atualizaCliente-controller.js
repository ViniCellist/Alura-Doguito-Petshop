import { clienteService } from "../service/cliente-service.js";

const takeURL = new URL(window.location);

const id = takeURL.searchParams.get('id');

const inputName = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detailedClient(id)
.then(dados => {
    inputName.value = dados.nome;
    inputEmail.value = dados.email;
});

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clienteService.updateCliente(id, inputName.value, inputEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html" 
    })
})