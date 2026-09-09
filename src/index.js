const express = require('express');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
app.use(express.json());

app.use("/livros", livroRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});