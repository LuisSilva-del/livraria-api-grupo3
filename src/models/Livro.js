class Livro {
  #titulo;
  #autor;
  #preco;
  #estoque; // ADICIONADO: Declaração do campo privado

  constructor(titulo, autor, preco, estoque) { // ADICIONADO: estoque recebido aqui
    this.#titulo = titulo;
    this.#autor = autor;
    this.#preco = preco;
    this.#estoque = estoque; // ADICIONADO: estoque salvo aqui
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

  // ADICIONADO: Getter e Setter para o estoque funcionar perfeitamente
  get estoque() {
    return this.#estoque;
  }

  set estoque(novoEstoque) {
    this.#estoque = novoEstoque;
  }

  toJSON() {
    return {
      titulo: this.titulo,
      autor: this.autor,
      preco: this.preco,
      estoque: this.estoque 
    };
  }
}

module.exports = Livro;
