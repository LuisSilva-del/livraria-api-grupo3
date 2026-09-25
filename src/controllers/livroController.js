// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

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

function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
    let livro = livroService.atualizarCompletoLivro(req.params.id, req.body);
    if (!livro) return res.status(404).json({ erro: "Livro nao encontrado" });

    res.json(livro);
}

function atualizarParcial(req, res) {
    let livro = livroService.atualizarParcialLivro(req.params.id, req.body);
    if (!livro) return res.status(404).json({ erro: "Livro nao encontrado" });

    res.json(livro);
}

function deletar(req, res) {
    let apagou = livroService.deletarLivro(req.params.id);
    if (!apagou) return res.status(404).json({ erro: "Livro nao encontrado" });
    
    res.status(204).send();
}

module.exports = { listarLivros, buscarLivroPorId, criar, atualizarCompleto, atualizarParcial, deletar };
