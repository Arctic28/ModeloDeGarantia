class Cliente {
    constructor(id, name, endereco, email, telefone) {
        this.id = id;
        this.name = name;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }

    atualizarEmail(novoEmail) {
        this.email = novoEmail;
    }

    atualizarTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }

    mostrarInfo() {
        return `Cliente: ${this.name}, Email: ${this.email}, Endereço: ${this.endereco}, Telefone: ${this.telefone}.`;
    }
}

module.exports = Cliente; // Exporta a classe Cliente
