// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require('../services/livroService');

function listarLivros(req, res) {
  const livros = livroService.listarTodos();
  res.json(livros);
}

function buscarLivroPorId(req, res) {
  const { id } = req.params;
  const livro = livroService.buscarPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.json(livro);
}

module.exports = { listarLivros, buscarLivroPorId};