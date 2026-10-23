class Livro {
<<<<<<< HEAD
  // Declaração dos campos privados
  #id; 
=======
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
  #preco;
  #estoque;

  // Removido o "id" dos parâmetros para aceitar a criação com 4 dados
  constructor(titulo, autor, preco, estoque) {
<<<<<<< HEAD
    this.#id = null; // Começa sem ID, o service vai colocar depois
=======
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
  }

<<<<<<< HEAD
  // Getters e Setters para o ID funcionar de forma pública
  get id() {
    return this.#id;
  }

  set id(novoId) {
    this.#id = novoId;
  }

=======
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
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

<<<<<<< HEAD
  // Método para conversão segura em objeto literal / JSON atualizado
=======
>>>>>>> ed31d9572fdd9a9b861520c3719fadc7e3debc1c
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