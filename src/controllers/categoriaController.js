const categoriaService = require("../services/categoriaService");

<<<<<<< HEAD
function listar(req, res) {
  const categorias = categoriaService.listarTodas();
  res.status(200).json(categorias);
}

// 💻 Aqui começa o Passo 3.2:
function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true); // true aqui
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

=======
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
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

<<<<<<< HEAD
function atualizar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true); // true aqui
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ mensagem: "Categoria atualizada com sucesso" });
}

function atualizarParcial(req, res) {
  const erro = categoriaService.validarCategoria(req.body, false); // ⚠️ MUDADO PARA FALSE AQUI (conforme a dica)
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  res.status(200).json({ mensagem: "Categoria alterada parcialmente" });
}

module.exports = {
  listar,
  criar,
  atualizar,
  atualizarParcial
};
=======
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
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
