const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Por favor, digite números válidos.");
} else if (num2 === 0) {
  alert("Erro: Não é possível dividir por zero.");
} else {
  alert(`O resultado da divisão é: ${num1 / num2}`);
}