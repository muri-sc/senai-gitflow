const { soma, subtracao } = require('./index');

describe('soma', () => {
  test('soma dois números positivos corretamente (caminho feliz)', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma dois números negativos corretamente', () => {
    expect(soma(-2, -3)).toBe(-5);
  });

  test('soma com zero retorna o outro operando', () => {
    expect(soma(0, 7)).toBe(7);
  });

  test('soma com entrada não numérica (NaN) resulta em NaN', () => {
    expect(soma(NaN, 5)).toBeNaN();
  });
});

describe('subtracao', () => {
  test('subtrai dois números positivos corretamente (caminho feliz)', () => {
    expect(subtracao(5, 3)).toBe(2);
  });

  test('subtrai resultando em valor negativo', () => {
    expect(subtracao(3, 5)).toBe(-2);
  });

  test('subtrai números negativos corretamente', () => {
    expect(subtracao(-5, -3)).toBe(-2);
  });

  test('subtrai zero de um número retorna o próprio número', () => {
    expect(subtracao(5, 0)).toBe(5);
  });

  test('subtracao com entrada não numérica (NaN) resulta em NaN', () => {
    expect(subtracao(NaN, 5)).toBeNaN();
  });
});
