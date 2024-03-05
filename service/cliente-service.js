export const listClients = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(answer => {
        return answer.json();
    });
};

export const clienteService = {
    listClients
}