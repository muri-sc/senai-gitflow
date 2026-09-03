function raizQuadrada(numero) {
  if (numero < 0) {
    return null;
  }
  return Math.sqrt(numero);
}
module.exports = raizQuadrada;