const livroService = require("../services/livroService");

async function listarLivros(req, res) {
  const filtros = req.query;
  const livros = await livroService.listarLivros(filtros);

  res.status(200).json(livros);
}

async function buscarPorId(req, res) {
  const id = req.params.id;
  const livro = await livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(200).json(livro);
}

async function criar(req, res) {
  const erro = livroService.validarLivro(req.body, true);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const novoLivro = await livroService.criarLivro(req.body);

  res.status(201).json(novoLivro);
}

async function atualizarCompleto(req, res) {
  const erro = livroService.validarLivro(req.body, true);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const { id } = req.params;
  const livro = await livroService.atualizarLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(200).json(livro);
}

async function atualizarParcial(req, res) {
  const erro = livroService.validarLivro(req.body, false);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const { id } = req.params;
  const livro = await livroService.atualizarParcialLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(200).json(livro);
}

async function deletar(req, res) {
  const { id } = req.params;
  const apagou =  await livroService.deletarLivro(id);

  if (!apagou) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(204).send();
}

module.exports = {
  listarLivros,
  buscarPorId,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
};