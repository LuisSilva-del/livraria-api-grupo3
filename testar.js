// Crie os caminhos apontando corretamente para dentro de src/models/
const Cliente = require("./src/models/Cliente");
const Funcionario = require("./src/models/Funcionario");
const Livro = require("./src/models/Livro"); 

// --- O restante do seu código testar.js continua exatamente igual ---
const c1 = new Cliente("Rebeca Souza", "rebeca@email.com", 150);
const f1 = new Funcionario("Victor Gonçalves", "victor@livraria.com", 2500);

c1.apresentar();
console.log("");
f1.apresentar();

console.log("\n--- TESTANDO A SEÇÃO 3 DO EXERCÍCIO (LIVROS) ---");

const livros = [];
let proximoId = 1;

function criarLivro(dados) {
  const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
  novoLivro.id = proximoId;
  proximoId++;
  livros.push(novoLivro);
  return novoLivro;
}

criarLivro({ titulo: "Clean Code", autor: "Robert C. Martin", preco: 89.9, estoque: 12 });
criarLivro({ titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", preco: 45.0, estoque: 20 });

console.log("Resultado esperado do GET /livros:");
console.log(JSON.stringify(livros, null, 2));

function buscarLivroPorId(id) {
  return livros.find((livro) => livro.id === Number(id));
}

console.log("\nTestando a busca pelo ID 2:");
const livroBuscado = buscarLivroPorId("2");
if (livroBuscado) {
  console.log("Livro encontrado com sucesso:", livroBuscado.toJSON());
} else {
  console.log("Erro: Livro não encontrado.");
}
