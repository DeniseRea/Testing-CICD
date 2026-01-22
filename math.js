/**
 * Funciones matemáticas adicionales
 * Implementación de factorial y fibonacci
 * Autor: Denise
 */

/**
 * Calcula el factorial de un número
 * @param {number} n - Número entero no negativo
 * @returns {number} El factorial de n
 */
export function factorial(n) {
  // Validación de entrada
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }

  // Caso base
  if (n === 0 || n === 1) {
    return 1;
  }

  // Cálculo iterativo del factorial
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

/**
 * Calcula el número de Fibonacci en la posición n
 * @param {number} n - Posición en la secuencia (empezando desde 0)
 * @returns {number} El número de Fibonacci en la posición n
 */
export function fibonacci(n) {
  // Validación de entrada
  if (n < 0) {
    throw new Error('La posición debe ser un número no negativo');
  }

  // Casos base
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Cálculo iterativo de Fibonacci
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}
