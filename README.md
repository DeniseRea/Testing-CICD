# Laboratorio CI/CD con GitHub Actions 🚀

## 📝 Descripción del Proyecto

Laboratorio de integración continua (CI) y despliegue continuo (CD) utilizando GitHub Actions. Este proyecto implementa un servidor Express simple con pruebas automatizadas usando Jest y análisis de código estático con ESLint.

**Asignatura**: Pruebas de Software  
**Nivel**: 6to  
**Autor**: Denise  
**Fecha**: Enero 2026

---

## 📁 Estructura del Proyecto

```
labortatorio/
├── .github/
│   └── workflows/
│       └── ci.yml              # Configuración de GitHub Actions
├── node_modules/               # Dependencias (ignorado en Git)
├── .eslintrc.json             # Configuración de ESLint
├── .gitignore                 # Archivos ignorados por Git
├── index.js                   # Servidor Express
├── sum.js                     # Función de suma
├── sum.test.js                # Pruebas para sum.js
├── math.js                    # Funciones matemáticas (factorial, fibonacci)
├── math.test.js               # Pruebas para math.js
├── package.json               # Configuración del proyecto y dependencias
├── COMANDOS_GIT.md           # Guía de comandos Git
└── README.md                 # Este archivo
```

---

## 🎯 Objetivos del Laboratorio

✅ Configurar un flujo de CI en GitHub Actions  
✅ Implementar pruebas unitarias con Jest  
✅ Aplicar análisis estático de código con ESLint  
✅ Simular un proceso de despliegue automatizado  
✅ Comprender el ciclo de vida de CI/CD

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Express**: Framework web para Node.js
- **Jest**: Framework de testing
- **ESLint**: Herramienta de análisis estático de código
- **GitHub Actions**: Plataforma de CI/CD

---

## 📦 Instalación

### Prerrequisitos

- Node.js v14 o superior
- npm (incluido con Node.js)
- Cuenta de GitHub
- Git instalado

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/nombreRepositorio.git
   cd nombreRepositorio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

---

## 🚀 Uso

### Iniciar el servidor
```bash
npm start
```
El servidor se ejecutará en `http://localhost:3000`

### Endpoints disponibles

- **GET /** - Mensaje de bienvenida
  ```json
  {
    "mensaje": "Bienvenido al laboratorio de CI/CD con GitHub Actions",
    "autor": "Denise",
    "fecha": "2026-01-22T..."
  }
  ```

- **GET /health** - Estado del servidor
  ```json
  {
    "status": "OK",
    "timestamp": 1737504000000
  }
  ```

### Ejecutar pruebas
```bash
npm test
```

### Ejecutar análisis de código
```bash
npm run lint
```

---

## 🧪 Pruebas Implementadas

### sum.test.js
- ✅ Suma de números positivos
- ✅ Suma de números negativos
- ✅ Suma con cero
- ✅ Suma de números decimales

### math.test.js
- ✅ Factorial de 0, 1, 5, 10
- ✅ Manejo de errores para números negativos
- ✅ Fibonacci de 0, 1, 2, 5, 10, 15
- ✅ Validación de entradas incorrectas

---

## 🔄 Workflow de GitHub Actions

El workflow se activa automáticamente en:
- **Push** a la rama `main`
- **Pull requests** hacia la rama `main`

### Steps del Workflow

1. 📥 Checkout del repositorio
2. 🔧 Configuración de Node.js v18
3. 📦 Instalación de dependencias
4. 🔍 Análisis estático con ESLint
5. 🧪 Ejecución de pruebas unitarias
6. 🚀 Simulación de despliegue

---

## 📊 Actividades Complementarias

### 1. Funciones Adicionales Implementadas

- **factorial(n)**: Calcula el factorial de un número
- **fibonacci(n)**: Calcula el número de Fibonacci en la posición n

### 2. Error Intencional (Documentado)

Para demostrar el funcionamiento del CI:

**Provocar error**:
- Modificar `sum.js` para que retorne un valor incorrecto
- Hacer commit y push
- Verificar que GitHub Actions detecta el fallo ❌

**Corregir error**:
- Restaurar `sum.js` a su estado correcto
- Hacer commit y push
- Verificar que GitHub Actions pasa exitosamente ✅

Ver capturas en el informe de laboratorio.

---

## 📸 Capturas Requeridas

1. ✅ Estructura de archivos del proyecto
2. ✅ Ejecución local de `npm test`
3. ✅ Ejecución local de `npm run lint`
4. ✅ Repositorio en GitHub
5. ✅ Workflow exitoso (inicial)
6. ✅ Workflow fallido (error intencional)
7. ✅ Workflow exitoso (después de corrección)
8. ✅ Detalle de steps en Actions

---

## 📝 Comandos Git Útiles

Ver la guía completa en [COMANDOS_GIT.md](COMANDOS_GIT.md)

```bash
# Configuración inicial
git init
git add .
git commit -m "Proyecto base con CI"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nombreRepositorio.git
git push -u origin main

# Actualizaciones
git add .
git commit -m "mensaje descriptivo"
git push
```

---

## ✅ Resultados Esperados

- ✅ Servidor Express funcionando correctamente
- ✅ Todas las pruebas unitarias pasando (12+ tests)
- ✅ ESLint sin errores ni advertencias
- ✅ Workflow de GitHub Actions ejecutándose automáticamente
- ✅ Pipeline de CI completamente funcional

---

## 📚 Conclusiones

1. **Automatización**: GitHub Actions permite automatizar completamente el proceso de testing y validación de código, reduciendo errores humanos y acelerando el desarrollo.

2. **Detección Temprana**: La integración continua detecta errores inmediatamente después de cada push, lo que facilita la identificación y corrección rápida de problemas.

---

## 💡 Recomendaciones

1. **Commits Frecuentes**: Realizar commits pequeños y frecuentes facilita la identificación de errores y mejora el historial del proyecto.

2. **Pruebas Completas**: Mantener una cobertura de pruebas alta garantiza la calidad del código y reduce bugs en producción.

---

## 👥 Autor

**Denise**  
Ingeniería de Software - 6to Nivel  
Universidad Pontificia Universidad Católica del Ecuador  
Sede Santo Domingo

---

## 📄 Licencia

ISC License - Este proyecto es parte de un laboratorio académico.

---

## 🔗 Enlaces Útiles

- [Documentación de GitHub Actions](https://docs.github.com/en/actions)
- [Documentación de Jest](https://jestjs.io/)
- [Documentación de ESLint](https://eslint.org/)
- [Documentación de Express](https://expressjs.com/)

---

**Última actualización**: Enero 2026
