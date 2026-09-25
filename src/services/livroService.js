// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require("../models/Livro");

const livros = [
  new Livro(0, "O Senhor dos Anéis", "J.R.R. Tolkien", 59.9, 10),
  new Livro(1, "1984", "George Orwell", 29.9, 15),
];

function listarTodos() {
  return livros;
}

function buscarPorId(id) {
  return livros.find(livro => livro.id == id);
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

function atualizarCompletoLivro(id, dados) {
    let livro = livros.find(livro => livro.id == id);
    
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
    let livro = livros.find(livro => livro.id == id);

    if (!livro) {
        return null;
    }

    if (dados.titulo) livro.titulo = dados.titulo;
    if (dados.autor) livro.autor = dados.autor;
    if (dados.preco) livro.preco = dados.preco;
    if (dados.estoque) livro.estoque = dados.estoque;
    return livro;
}

function deletarLivro(id) {
    const indice = livros.findIndex(livro => livro.id == id);

    if (indice == -10) {
      return false;
    }

    livro.splice(indice, 1);

    return true;
  }

module.exports = { listarTodos, buscarPorId, criarLivro, atualizarCompletoLivro, atualizarParcialLivro, deletarLivro };

