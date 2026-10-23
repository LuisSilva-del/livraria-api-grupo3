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
