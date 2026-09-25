// ROTA (o "garcom"): recebe a requisicao HTTP.
// Aqui vao ficar os caminhos (endpoints) relacionados a Livro.
// Ex: GET /livros, POST /livros
// Implementacao chega no Bloco 3, quando o banco de dados entrar.

const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

router.get("/", livroController.listarLivros);
router.get("/:id", livroController.buscarLivroPorId);
router.post("/", livroController.criar);
router.put("/:id", livroController.atualizarCompleto);
router.patch("/:id", livroController.atualizarParcial);
router.delete("/:id", livroController.deletar);

module.exports = router;


