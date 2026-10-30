const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");
const validarId = require("../middlewares/validarId");

router.get("/", livroController.listarLivros);
router.get("/:id", validarId, livroController.buscarPorId);
router.post("/", livroController.criar);
router.put("/:id", validarId, livroController.atualizarCompleto);
router.patch("/:id", validarId, livroController.atualizarParcial);
router.delete("/:id", validarId, livroController.deletar);

module.exports = router;