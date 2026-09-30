// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Buscar, calcular, validar.
// Implementacao chega no Bloco 3.

const Livro = require("../models/Livro");
const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
];

function listarLivros(filtros) {
  let resultado = livros;
  
  if (filtros && filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase())
    );
  }

  // ADICIONADO: Filtro por preço máximo (SA1 - Item 4 do Guia)
  if (filtros && filtros.precoMax) {
    resultado = resultado.filter((livro) => 
      livro.preco <= Number(filtros.precoMax)
    );
  }

  return resultado;
}

function buscarLivroPorIndice(indice) {
  return livros[indice];
}

function criarLivro(dados) {
  const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
  livros.push(novoLivro);
  return novoLivro;
}

// CORRIGIDO: Exportação ajustada corretamente
module.exports = {
  listarLivros,
  buscarLivroPorIndice,
  criarLivro
};

