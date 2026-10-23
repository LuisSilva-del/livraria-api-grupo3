const categoriaService = require("../services/categoriaService");

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

  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

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
