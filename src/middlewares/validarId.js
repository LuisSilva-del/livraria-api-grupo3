function validarId(req, res, next) {
  if (isNaN(Number(req.params.id))) {
    res.status(400).json({ erro: "O id deve ser um numero" });
    return;
  }
  next(); // Passa para a próxima função (o controller) se for um número válido
}

module.exports = validarId;
