const GerenciadorClientes = require('./GerenciadorClientes');

class ClienteController {
    constructor(gerenciador) {
        this.gerenciador = gerenciador;
    }

    adicionarCliente(name, endereco, email, telefone) {
        this.gerenciador.adicionarCliente(name, endereco, email, telefone);
        console.log(`Cliente ${name} adicionado com sucesso.`);
    }

    removerCliente(id) {
        const clienteExistente = this.gerenciador.buscarClientePorId(id);
        if (clienteExistente) {
            this.gerenciador.removerCliente(id);
            console.log(`Cliente ${clienteExistente.name} removido com sucesso.`);
        } else {
            console.log(`Cliente com ID ${id} não encontrado.`);
        }
    }

    alterarCliente(id, novosDados) {
        const cliente = this.gerenciador.buscarClientePorId(id);
        if (cliente) {
            Object.assign(cliente, novosDados); // Atualiza os dados do cliente
            console.log(`Dados do cliente ${cliente.name} atualizados com sucesso.`);
        } else {
            console.log(`Cliente com ID ${id} não encontrado.`);
        }
    }

    visualizarCliente(id) {
        const cliente = this.gerenciador.buscarClientePorId(id);
        if (cliente) {
            console.log(cliente.mostrarInfo());
        } else {
            console.log(`Cliente com ID ${id} não encontrado.`);
        }
    }

    visualizarTodosClientes() {
        console.log("Todos os Clientes:");
        console.log(this.gerenciador.mostrarTodosClientes());
    }
}

module.exports = ClienteController;
