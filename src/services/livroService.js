const Livro = require("../models/Livro");
const { db } = require("../config/db");
const livros = [];
let proximoId = 1;

function listarTodos() {
  return livros;
}

function buscarPorId(id) {
  return livros.find((livro) => livro.id === Number(id));
}

async function listarLivros(filtros) {
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;

  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }

  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  return resultado;
}

function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  novoLivro.id = proximoId;
  proximoId++;

  livros.push(novoLivro);

  return novoLivro;
}

function atualizarCompletoLivro(id, dados) {
  const livro = buscarPorId(id);

  if (!livro) {
    return null;
  }

  livro.titulo = dados.titulo;
  livro.autor = dados.autor;
  livro.preco = dados.preco;
  livro.estoque = dados.estoque;

  return livro;
}

function atualizarParcialLivro(id, dados) {
  const livro = buscarPorId(id);

  if (!livro) {
    return null;
  }

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;

  return livro;
}

function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number(id));

  if (posicao === -1) {
    return false;
  }

  livros.splice(posicao, 1);

  return true;
}

criarLivro({
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
});

criarLivro({
  titulo: "Eloquent JavaScript",
  autor: "Marijn Haverbeke",
  preco: 45.0,
  estoque: 20,
});

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
  listarTodos,
  buscarPorId,
  listarLivros,
  criarLivro,
  atualizarCompletoLivro,
  atualizarParcialLivro,
  deletarLivro,
  validarLivro,
};
