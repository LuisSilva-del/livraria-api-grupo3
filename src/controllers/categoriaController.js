const categoriaService = require("../services/categoriaService");

function listar(req, res) {
  const categorias = categoriaService.listarTodas();
  res.status(200).json(categorias);
}

function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ mensagem: "Categoria atualizada com sucesso" });
}

function atualizarParcial(req, res) {
  const erro = categoriaService.validarCategoria(req.body, false);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }
  res.status(200).json({ mensagem: "Categoria alterada parcialmente" });
}

function buscarPorId(req, res) {
  const categoria = categoriaService.buscarCategoriaPorId(req.params.id);
  if (!categoria) {
    res.status(404).json({ erro: "Categoria nao encontrada" });
    return;
  }
  res.status(200).json(categoria);
}

function deletar(req, res) {
  const sucesso = categoriaService.deletarCategoria(req.params.id);
  if (!sucesso) {
    res.status(404).json({ erro: "Categoria nao encontrada" });
    return;
  }
  res.status(204).send();
}

module.exports = {
  listar,
  criar,
  atualizar,
  atualizarParcial,
  buscarPorId,
  deletar,
};
