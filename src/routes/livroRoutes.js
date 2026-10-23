const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");
// 🚀 Linha adicionada para importar o validador de ID
const validarId = require("../middlewares/validarId");

// Rota sem ID continua igual
router.get("/", livroController.listarLivros);

// 🚀 As 4 rotas abaixo agora usam o validarId antes do controller
router.get("/:id", validarId, livroController.buscarLivroPorId);
router.post("/", livroController.criar); // Post não usa ID, continua igual
router.put("/:id", validarId, livroController.atualizarCompleto);
router.patch("/:id", validarId, livroController.atualizarParcial);
router.delete("/:id", validarId, livroController.deletar);

module.exports = router;
