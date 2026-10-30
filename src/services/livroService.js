const { db } = require("../config/db");

async function buscarLivroPorId(id) {
  const [linhas] = await db.query(
    "SELECT * FROM livros WHERE id = ?",
    [id]
  );

  return linhas[0];
}

async function listarLivros(filtros) {
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;

  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase())
    );
  }

  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax)
    );
  }

  return resultado;
}

async function criarLivro(dados) {
  const [resultado] = await db.query(
    "INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)",
    [dados.titulo, dados.autor, dados.preco, dados.estoque]
  );

  return await buscarLivroPorId(resultado.insertId);
}

// 4.1 - PUT: atualizar um livro no banco
async function atualizarLivro(id, dados) {
  const [resultado] = await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, id]
  );

  if (resultado.affectedRows === 0) return null;

  return await buscarLivroPorId(id);
}

// 4.2 - PATCH: atualizar parcialmente um livro
async function atualizarParcialLivro(id, dados) {
  const livro = await buscarLivroPorId(id);

  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;

  return await atualizarLivro(id, livro);
}

// 5.1 - DELETE: apagar um livro do banco
async function deletarLivro(id) {
  const [resultado] = await db.query(
    "DELETE FROM livros WHERE id = ?",
    [id]
  );

  return resultado.affectedRows > 0;
}

function validarLivro(dados, completo) {
  if (!dados) return "Envie os dados do livro em JSON";

  if (completo && !dados.titulo) return "O titulo e obrigatorio";
  if (completo && !dados.autor) return "O autor e obrigatorio";
  if (completo && dados.preco === undefined) return "O preco e obrigatorio";
  if (completo && dados.estoque === undefined) return "O estoque e obrigatorio";

  if (
    dados.preco !== undefined &&
    (typeof dados.preco !== "number" || dados.preco < 0)
  ) {
    return "O preco deve ser um numero maior ou igual a zero";
  }

  if (
    dados.estoque !== undefined &&
    (typeof dados.estoque !== "number" || dados.estoque < 0)
  ) {
    return "O estoque deve ser um numero maior ou igual a zero";
  }

  return null;
}

module.exports = {
  buscarLivroPorId,
  listarLivros,
  criarLivro,
  atualizarLivro,
  atualizarParcialLivro,
  deletarLivro,
  validarLivro,
};

