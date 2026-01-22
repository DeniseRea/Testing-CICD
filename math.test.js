/**
 * Pruebas unitarias para funciones matemáticas
 * Pruebas para factorial y fibonacci
 */

import { factorial, fibonacci } from './math.js';

describe('Función factorial()', () => {
  test('factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 es 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de 10 es 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('factorial de número negativo lanza error', () => {
    expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
  });
});

describe('Función fibonacci()', () => {
  test('fibonacci(0) es 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1) es 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(2) es 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci(5) es 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci(10) es 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci(15) es 610', () => {
    expect(fibonacci(15)).toBe(610);
  });

  test('fibonacci de número negativo lanza error', () => {
    expect(() => fibonacci(-1)).toThrow('La posición debe ser un número no negativo');
  });
});
