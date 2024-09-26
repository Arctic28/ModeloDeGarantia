const GerenciadorClientes = require('./controllers/GerenciadorClientes');
const ClienteController = require('./controllers/ClienteController');

const gerenciador = new GerenciadorClientes();
const clienteController = new ClienteController(gerenciador);

// Adicionando clientes
clienteController.adicionarCliente("Roberto Fernandes", "Rua Carvalho, N 301", "robertofernandes@gmail.com", "81991929394");
clienteController.adicionarCliente("Arthur Victor", "Rua da Aurora, N 12", "victor.87@gmail.com", "81991929394");
clienteController.adicionarCliente("Rinaldo Vilela", "Avenida Agamenon Magalhães, N 505", "rvilela00@hotmail.com", "81991929394");

// Visualizando todos os clientes
clienteController.visualizarTodosClientes();

// Removendo um cliente
clienteController.removerCliente(2);
clienteController.visualizarTodosClientes();

// Alterando um cliente
clienteController.alterarCliente(3, { email: "rinaldo.novo@gmail.com" });

// Visualizando um cliente específico
clienteController.visualizarCliente(3);
