const Cliente = require('../Cliente');

class GerenciadorClientes {
    constructor() {
        this.clientes = [];
        this.proximoId = 1;
    }

    adicionarCliente(name, endereco, email, telefone) {
        const novoCliente = new Cliente(this.proximoId, name, endereco, email, telefone);
        this.clientes.push(novoCliente);
        this.proximoId++;
    }

    removerCliente(id) {
        this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    }

    buscarClientePorId(id) {
        return this.clientes.find(cliente => cliente.id === id);
    }

    mostrarTodosClientes() {
        return this.clientes.map(cliente => cliente.mostrarInfo()).join('\n');
    }
}

module.exports = GerenciadorClientes;
