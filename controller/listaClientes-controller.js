import { clienteService } from "../service/cliente-service.js";

const createNewArrow = (nome, email, id) => {
    const arrowNewClient = document.createElement('tr');
    const content = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;

    arrowNewClient.innerHTML = content;
    arrowNewClient.dataset.id = id;
    return arrowNewClient;
};

const table = document.querySelector('[data-tabela]');

table.addEventListener('click', async (e) => {
    let isDeleteBtn = e.target.className == 'botao-simples botao-simples--excluir';
    if (isDeleteBtn) {
        try {
            const rowClient = e.target.closest('[data-id]');
            let id = rowClient.dataset.id;
            await clienteService.removeCliente(id);
            rowClient.remove();
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
});

const render = async () => {
    try {
        const listaClientes = await clienteService.listClients()
    
        listaClientes.forEach(element => {
            table.appendChild(createNewArrow(element.nome, element.email, element.id));
        });
    }
    catch(erro) {
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }
    
};

render();


