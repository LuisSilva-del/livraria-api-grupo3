const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const validarId = require("../middlewares/validarId");

router.get("/", categoriaController.listar);
router.get("/:id", validarId, categoriaController.buscarPorId);
router.post("/", categoriaController.criar);
router.put("/:id", validarId, categoriaController.atualizar);
router.patch("/:id", validarId, categoriaController.atualizarParcial);
router.delete("/:id", validarId, categoriaController.deletar);

module.exports = router;