const express = require("express");
const livroRoutes = require("./routes/livroRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
  res.send("API da Livraria no ar!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
