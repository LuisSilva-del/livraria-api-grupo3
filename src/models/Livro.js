class Livro {
  // Declaração dos campos privados
  #id; 
  #preco;
  #estoque;

  // Removido o "id" dos parâmetros para aceitar a criação com 4 dados
  constructor(titulo, autor, preco, estoque) {
    this.#id = null; // Começa sem ID, o service vai colocar depois
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  // Getters e Setters para o ID funcionar de forma pública
  get id() {
    return this.#id;
  }

  set id(novoId) {
    this.#id = novoId;
  }

  get preco() {
    return this.#preco;
  }

  set preco(novoPreco) {
    this.#preco = novoPreco;
  }

  get estoque() {
    return this.#estoque;
  }

  set estoque(novoEstoque) {
    this.#estoque = novoEstoque;
  }

  // Método para conversão segura em objeto literal / JSON atualizado
  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      preco: this.#preco,
      estoque: this.#estoque,
    };
  }
}

module.exports = Livro;
