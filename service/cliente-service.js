export const listClients = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(answer => {
        if(answer.ok) {
            return answer.json();
        };
        throw new Error('Não foi possível listar os clientes');
    });
};

const createClient = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(answer => {
        if(answer.ok) {
            return answer.body
        }
        throw new Error('Não foi possível criar um clientes')
    });
        
};

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(answer => {
        if(!answer.ok) {
            throw new Error('Não foi possível deletar um clientes')
        }
    })
};

const detailedClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(answer => {
        if(answer.ok) {
            return answer.json();
        }
        throw new Error('Não foi possível detalhar um clientes')
    });
};

const updateCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        header: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( answer => {
        if(answer.ok) {
            return answer.json()
        }
        throw new Error('Não foi possível atualizar um clientes')
    });
};

export const clienteService = {
    listClients,
    createClient,
    removeCliente,
    detailedClient,
    updateCliente
};