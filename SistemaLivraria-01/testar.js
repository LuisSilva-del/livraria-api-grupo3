const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");

const c1 = new Cliente("Rebeca Souza", "rebeca@email.com", 150);
const f1 = new Funcionario("Victor Gonçalvez", "victor@livraria.com", 2500);

c1.apresentar();
console.log("");
f1.apresentar();