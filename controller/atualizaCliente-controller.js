import { clienteService } from "../service/cliente-service.js";

(async () => {
    const takeURL = new URL(window.location);
    
    const id = takeURL.searchParams.get('id');
    
    const inputName = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    
    try {
        const dados = await clienteService.detailedClient(id)
        inputName.value = dados.nome;
        inputEmail.value = dados.email;
    }
    catch(erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html'
    }
    
    const form = document.querySelector('[data-form]')
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            await clienteService.updateCliente(id, inputName.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html" 
        }
        catch(erro) {
            console.log(erro);
            window.location.href = '../telas/erro.html'
        }

    });
})();
