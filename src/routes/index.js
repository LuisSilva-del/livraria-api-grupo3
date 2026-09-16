const express = require('express');
const livroRouter = require('./livroRoutes'); 

const router = express.Router();

router.use('/livros', livroRouter);
module.exports = router;
