function raizQuadrada(numero) {
  if (numero < 0) {
    throw new Error("Não é possível calcular a raiz quadrada de um número negativo");
  }
  return Math.sqrt(numero);
}

console.log(raizQuadrada(16)); // 4
console.log(raizQuadrada(2));  // 1.4142135623730951

module.exports = raizQuadrada;
