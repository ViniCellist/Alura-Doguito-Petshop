const createNewArrow = (nome, email) => {
    const arrowNewClient = document.createElement('tr');
    const content = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;

    arrowNewClient.innerHTML = content;
    return arrowNewClient;
};

const table = document.querySelector('[data-tabela]');


const listClients = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/profile');
        
        http.onload = () => {
            if(http.status >= 400) {
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response))
            }
        };

        http.send();       
    });
    return promise;
};

listClients()
.then(data => {
    data.forEach(element => {
        table.appendChild(createNewArrow(element.nome, element.email));
    });
});