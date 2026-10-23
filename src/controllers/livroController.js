const livroService = require("../services/livroService");

function listarLivros(req, res) {
  const filtros = req.query;
  const livros = livroService.listarLivros(filtros);

  res.status(200).json(livros);
}

function buscarLivroPorId(req, res) {
  const { id } = req.params;
  const livro = livroService.buscarPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.status(200).json(livro);
}

function criar(req, res) {
  // 💻 Validação para criar (todos os campos obrigatórios: true)
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const novoLivro = livroService.criarLivro(req.body);

  res.status(201).json(novoLivro);
}

function atualizarCompleto(req, res) {
  // 💻 Validação para substituir tudo (todos os campos obrigatórios: true)
  const erro = livroService.validarLivro(req.body, true);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const { id } = req.params;
  const livro = livroService.atualizarCompletoLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro nao encontrado",
    });
  }

  res.status(200).json(livro);
}

function atualizarParcial(req, res) {
  // 💻 Validação para alteração parcial (campos opcionais: false)
  const erro = livroService.validarLivro(req.body, false);
  if (erro) {
    return res.status(400).json({ erro: erro });
  }

  const { id } = req.params;
  const livro = livroService.atualizarParcialLivro(id, req.body);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro nao encontrado",
    });
  }

  res.status(200).json(livro);
}

function deletar(req, res) {
  const { id } = req.params;
  const apagou = livroService.deletarLivro(id);

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