function validarId(req, res, next) {
  if (!/^\d+$/.test(req.params.id)) {
    res.status(400).json({ erro: "O id deve ser um numero inteiro" });
    return;
  }
  next();
}

module.exports = validarId;
