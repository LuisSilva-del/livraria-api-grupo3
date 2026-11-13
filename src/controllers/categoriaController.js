const categoriaService = require("../services/categoriaService");

function listar(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.status(200).json(categorias);
}

function buscarPorId(req, res) {
  const { id } = req.params;
  const categoria = categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const novaCategoria = await categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const { id } = req.params;
  const categoria = categoriaService.atualizarCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function atualizarParcial(req, res) {
  const erro = categoriaService.validarCategoria(req.body, false);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const { id } = req.params;
  const categoria = categoriaService.atualizarParcialCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function deletar(req, res) {
  const { id } = req.params;
  const apagou = categoriaService.deletarCategoria(id);

  if (!apagou) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar,
};