export const listClients = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(answer => {
        return answer.json();
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
        return answer.body
    })
        
};

export const clienteService = {
    listClients,
    createClient
};