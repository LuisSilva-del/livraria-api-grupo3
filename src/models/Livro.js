class Livro {
  #id;
  #titulo;
  #autor;
  #preco;
  #estoque;

  constructor(id, titulo, autor, preco, estoque) {
    this.#id = id;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  get id() {
    return this.#id;
  }

  set id(novoId) {
    this.#id = novoId;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(novoTitulo) {
    this.#titulo = novoTitulo;
  }

  get autor() {
    return this.#autor;
  }

  set autor(novoAutor) {
    this.#autor = novoAutor;
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

  toJSON() {
    return {
      id: this.#id,
      titulo: this.#titulo,
      autor: this.#autor,
      preco: this.#preco,
      estoque: this.#estoque,
    };
  }
}

module.exports = Livro;