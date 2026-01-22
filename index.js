/**
 * Servidor Express simple para el laboratorio de CI/CD
 * Autor: Denise
 * Fecha: Enero 2026
 */

import express from 'express';

// Crear instancia de Express
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint principal
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido al laboratorio de CI/CD con GitHub Actions',
    autor: 'Denise',
    fecha: new Date().toISOString()
  });
});

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: Date.now() });
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`✓ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('✓ Presiona Ctrl+C para detener el servidor');
});

export default app;
