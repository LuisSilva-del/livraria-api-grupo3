// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require('../models/Livro');

const livros = [
  new Livro(0, "O Senhor dos Anéis", "J.R.R. Tolkien", 59.90, 10),
  new Livro(1, "1984", "George Orwell", 29.90, 15)
];

function listarTodos() {
  return livros;
}

function buscarPorId(id) {
  return livros.find(livro => livro.id === Number(id));
}

module.exports = { listarTodos, buscarPorId };
