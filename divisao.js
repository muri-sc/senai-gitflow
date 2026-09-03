function dividir(num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    return null;
  }
  return num1 / num2;
}

export default dividir