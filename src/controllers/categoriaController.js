const categoriaService = require("../services/categoriaService");

function listarCategorias(req, res) {
  const categorias = categoriaService.listarCategorias();
  res.status(200).json(categorias);
}

function buscarCategoriaPorId(req, res) {
  const { id } = req.params;
  const categoria = categoriaService.buscarCategoriaPorId(id);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function criarCategoria(req, res) {
  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

function atualizarCategoria(req, res) {
  const { id } = req.params;
  const categoria = categoriaService.atualizarCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function atualizarParcialCategoria(req, res) {
  const { id } = req.params;
  const categoria = categoriaService.atualizarParcialCategoria(id, req.body);

  if (!categoria) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(200).json(categoria);
}

function deletarCategoria(req, res) {
  const { id } = req.params;
  const apagou = categoriaService.deletarCategoria(id);

  if (!apagou) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }

  res.status(204).send();
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
  atualizarParcialCategoria,
  deletarCategoria,
};