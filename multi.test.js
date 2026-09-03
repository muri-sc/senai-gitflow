const { multiplicar } = require('./multi');

describe('multiplicar', () => {
  test('multiplica dois números positivos corretamente (caminho feliz)', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('multiplica números negativos resultando em valor positivo', () => {
    expect(multiplicar(-3, -4)).toBe(12);
  });

  test('multiplica um número positivo por um negativo resulta em valor negativo', () => {
    expect(multiplicar(3, -4)).toBe(-12);
  });

  test('multiplicação por zero retorna zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
  });

  test('multiplicação com entrada não numérica (NaN) resulta em NaN', () => {
    expect(multiplicar(NaN, 5)).toBeNaN();
  });
});
