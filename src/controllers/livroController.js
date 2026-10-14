const livroService = require("../services/livroService");

function listarLivros(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

function buscarLivroPorId(req, res) {
  const indice = req.params.id;
  const livro = livroService.buscarPorId(indice);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(200).json(livro);
}

function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
  const { id } = req.params;
  let livro = livroService.atualizarCompletoLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro nao encontrado",
    });
  }

  res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  const { id } = req.params;
  let livro = livroService.atualizarParcialLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro nao encontrado",
    });
  }

  res.status(200).json(livro);
}

function deletar(req, res) {
  const { id } = req.params;
  let apagou = livroService.deletarLivro(id);

  if (!apagou) {
    return res.status(404).json({
      erro: "Livro nao encontrado",
    });
  }

  res.status(204).send();
}

module.exports = {
  listarLivros,
  buscarLivroPorId,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
};
