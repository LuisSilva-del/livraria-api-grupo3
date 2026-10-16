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