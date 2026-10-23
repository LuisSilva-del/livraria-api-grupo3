const Livro = require("../models/Livro");

const livros = [
  new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 59.9, 10),
  new Livro("1984", "George Orwell", 29.9, 15),
];

function listarTodos() {
  return livros;
}

function buscarPorId(indice) {
  return livros[indice];
}

function listarLivros(filtros) {
  let resultado = livros;
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
  livros.push(novoLivro);
  return novoLivro;
}

function atualizarCompletoLivro(indice, dados) {
  const i = Number(indice);
  
  if (i < 0 || i >= livros.length) {
    return null;
  }

  livros[i].titulo = dados.titulo;
  livros[i].autor = dados.autor;
  livros[i].preco = dados.preco;
  livros[i].estoque = dados.estoque;
  
  return livros[i];
}

function atualizarParcialLivro(indice, dados) {
  const i = Number(indice);
  
  if (i < 0 || i >= livros.length) {
    return null;
  }

  const livro = livros[i];

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;
  
  return livro;
}

function deletarLivro(indice) {
  const i = Number(indice);

  if (i < 0 || i >= livros.length) {
    return false;
  }

  livros.splice(i, 1);
  return true;
}

// 💻 NOVA FUNÇÃO DE VALIDAÇÃO PARA A ATIVIDADE 16
function validarLivro(dados, completo) {
  if (!dados) return "Envie os dados do livro em JSON";

  if (completo && !dados.titulo) return "O titulo e obrigatorio";
  if (completo && !dados.autor) return "O autor e obrigatorio";

  if (dados.preco !== undefined) {
    if (typeof dados.preco !== "number" || isNaN(dados.preco)) {
      return "O preco deve ser um numero";
    }
    if (dados.preco < 0) {
      return "O preco nao pode ser negativo";
    }
  }

  if (dados.estoque !== undefined) {
    if (typeof dados.estoque !== "number" || isNaN(dados.estoque)) {
      return "O estoque deve ser um numero";
    }
    if (dados.estoque < 0) {
      return "O estoque nao pode ser negativo";
    }
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
  validarLivro, // ⚠️ Linha adicionada para exportar a validação
};

