/**
 * Pruebas unitarias para la función sum
 */

import { sum } from './sum.js';

describe('Función sum()', () => {
  test('suma 1 + 2 es igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('suma números negativos: -1 + -1 es igual a -2', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  test('suma con cero: 5 + 0 es igual a 5', () => {
    expect(sum(5, 0)).toBe(5);
  });

  test('suma números decimales: 0.1 + 0.2', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
