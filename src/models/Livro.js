class Livro {
  #id;
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque) {
    this.#id = null;
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  get id() {
    return this.#id;
  }

  set id(novoId) {
    this.#id = novoId;
  }

  set preco(novoPreco) {
    if (novoPreco < PRECO_MINIMO) {
      throw new Error("Preco nao pode ser negativo");
    }
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
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      preco: this.#preco,
      estoque: this.#estoque,
    };
  }
}

module.exports = Livro;
