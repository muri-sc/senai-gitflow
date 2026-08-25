const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+ ou -):");

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

switch (operacao) {
    case "+":
        console.log("Resultado:", soma(numero1, numero2));
        break;

    case "-":
        console.log("Resultado:", subtracao(numero1, numero2));
        break;

    default:
        console.log("Operação inválida");
}