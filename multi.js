function multiplicar(a, b) {
  return a * b;
}

function main() {
  const numero1 = Number(prompt("Digite o primeiro número:"));
  const numero2 = Number(prompt("Digite o segundo número:"));

  const resultado = multiplicar(numero1, numero2);

  alert(`O resultado da multiplicação é: ${resultado}`);
}

if (require.main === module) {
  main();
}

module.exports = { multiplicar };