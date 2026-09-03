const { dividir } = require('./divisao');

describe('dividir', () => {
  test('divide dois números positivos corretamente (caminho feliz)', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('divide números negativos corretamente', () => {
    expect(dividir(-10, 2)).toBe(-5);
  });

  test('divide zero pelo divisor retorna zero', () => {
    expect(dividir(0, 5)).toBe(0);
  });

  test('retorna null ao dividir por zero', () => {
    expect(dividir(10, 0)).toBeNull();
  });

  test('retorna null quando o dividendo não é um número válido', () => {
    expect(dividir('abc', 5)).toBeNull();
  });

  test('retorna null quando o divisor não é um número válido', () => {
    expect(dividir(5, 'abc')).toBeNull();
  });
});
