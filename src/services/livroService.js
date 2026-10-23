const Livro = require("../models/Livro");

const livros = [];
let proximoId = 1;

function listarTodos() {
  return livros;
}

function buscarPorId(id) {
  return livros.find((livro) => livro.id === Number(id));
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

<<<<<<< HEAD
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
=======
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
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c

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

