function dividir(num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    return null;
  }
  return num1 / num2;
}

function main() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));

  const resultado = dividir(num1, num2);
  if (resultado === null) {
    alert("Por favor, digite números válidos e um divisor diferente de zero.");
  } else {
    alert(`O resultado da divisão é: ${resultado}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { dividir };