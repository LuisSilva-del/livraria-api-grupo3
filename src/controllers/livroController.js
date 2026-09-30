// CONTROLLER (o "chef"): decide o que fazer com cada pedido.
// Recebe da rota, chama o service certo, devolve a resposta.
// Implementacao chega no Bloco 3.

const livroService = require("../services/livroService");

function listar(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);

  if (!livro) {
    res.status(404).json({ erro: "Livro nao encontrado" });
    return;
  }
  res.json(livro);
}

function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

// CORRIGIDO: Removidas as funções não declaradas para evitar quebra no servidor
module.exports = { 
  listar, 
  buscarPorIndice, 
  criar 
};

