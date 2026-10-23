const express = require("express");
const router = express.Router();

const livroRoutes = require("./livroRoutes");
const categoriaRoutes = require("./categoriaRoutes");

router.use("/livros", livroRoutes);
router.use("/categorias", categoriaRoutes);

module.exports = router;