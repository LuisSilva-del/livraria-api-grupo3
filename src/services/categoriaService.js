<<<<<<< HEAD
// Lista na memória para guardar as categorias criadas
const categorias = [
  { id: 1, nome: "Infantil", descricao: "Livros para criancas" }
];

// 💻 3.1 — A função de validação preenchida
function validarCategoria(dados, completo) {
  if (!dados) return "Envie os dados da categoria em JSON";
  
  if (completo && !dados.nome) return "O nome e obrigatorio";
  
  if (
    dados.nome !== undefined &&
    (typeof dados.nome !== "string" || dados.nome.length < 3)
  ) {
    return "O nome deve ter pelo menos 3 letras";
  }
  
  return null;
}

// Funções básicas do CRUD de categorias para o sistema não quebrar
function listarTodas() {
  return categorias;
}

function criarCategoria(dados) {
  const nova = {
    id: categorias.length + 1,
    nome: dados.nome,
    descricao: dados.descricao
  };
  categorias.push(nova);
  return nova;
}

// Exportando tudo para o Controller usar
module.exports = {
  validarCategoria,
  listarTodas,
  criarCategoria
};
=======
const Categoria = require("../models/Categoria");

const categorias = [];
let proximoId = 1;

criarCategoria({
  nome: "Ficção",
  descricao: "Romances, fantasia e ficção científica",
});

criarCategoria({
  nome: "Tecnologia",
  descricao: "Programação e afins",
});

function listarCategorias() {
  return categorias;
}

function buscarCategoriaPorId(id) {
  return categorias.find((categoria) => categoria.id === Number(id));
}

function criarCategoria(dados) {
  const novaCategoria = new Categoria(dados.nome, dados.descricao);

  novaCategoria.id = proximoId;
  proximoId++;

  categorias.push(novaCategoria);

  return novaCategoria;
}

function atualizarCategoria(id, dados) {
  const categoria = buscarCategoriaPorId(id);

  if (!categoria) return null;

  categoria.nome = dados.nome;
  categoria.descricao = dados.descricao;

  return categoria;
}

function atualizarParcialCategoria(id, dados) {
  const categoria = buscarCategoriaPorId(id);

  if (!categoria) return null;

  if (dados.nome !== undefined) categoria.nome = dados.nome;
  if (dados.descricao !== undefined) categoria.descricao = dados.descricao;

  return categoria;
}

function deletarCategoria(id) {
  const posicao = categorias.findIndex(
    (categoria) => categoria.id === Number(id),
  );

  if (posicao === -1) return false;

  categorias.splice(posicao, 1);

  return true;
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
