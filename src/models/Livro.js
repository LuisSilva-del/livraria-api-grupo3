class Livro {
  #id;
  #titulo;
  #autor;
  #preco;
<<<<<<< HEAD
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
=======
  #estoque; // ADICIONADO: Declaração do campo privado

  constructor(titulo, autor, preco, estoque) { // ADICIONADO: estoque recebido aqui
    this.#titulo = titulo;
    this.#autor = autor;
    this.#preco = preco;
    this.#estoque = estoque; // ADICIONADO: estoque salvo aqui
>>>>>>> 470bf339a568571b58189f1e61a8967f1cf48e07
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

<<<<<<< HEAD
=======
  // ADICIONADO: Getter e Setter para o estoque funcionar perfeitamente
>>>>>>> 470bf339a568571b58189f1e61a8967f1cf48e07
  get estoque() {
    return this.#estoque;
  }

  set estoque(novoEstoque) {
    this.#estoque = novoEstoque;
  }

  toJSON() {
    return {
<<<<<<< HEAD
      id: this.#id,
      titulo: this.#titulo,
      autor: this.#autor,
      preco: this.#preco,
      estoque: this.#estoque,
=======
      titulo: this.titulo,
      autor: this.autor,
      preco: this.preco,
      estoque: this.estoque 
>>>>>>> 470bf339a568571b58189f1e61a8967f1cf48e07
    };
  }
}

module.exports = Livro;