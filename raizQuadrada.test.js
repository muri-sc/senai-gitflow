const raizQuadrada = require('./raizQuadrada');

describe('raizQuadrada', () => {
  test('calcula a raiz quadrada de um número positivo corretamente (caminho feliz)', () => {
    expect(raizQuadrada(16)).toBe(4);
  });

  test('calcula a raiz quadrada de zero como zero', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  test('calcula a raiz quadrada de um número não inteiro corretamente', () => {
    expect(raizQuadrada(2)).toBeCloseTo(1.4142135623730951);
  });

  test('lança erro ao calcular a raiz quadrada de um número negativo', () => {
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo');
  });

  test('raiz quadrada de entrada não numérica resulta em NaN', () => {
    expect(raizQuadrada('abc')).toBeNaN();
  });
});
