# 📋 Guía de Comandos Git - Laboratorio CI/CD

## 🚀 Configuración Inicial del Repositorio

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Inicializar repositorio Git local
```bash
git init
```

### Paso 3: Agregar todos los archivos al staging area
```bash
git add .
```

### Paso 4: Hacer el primer commit
```bash
git commit -m "Proyecto base con CI"
```

### Paso 5: Renombrar la rama a main
```bash
git branch -M main
```

### Paso 6: Conectar con el repositorio remoto
**Nota**: Reemplaza `TU_USUARIO` y `nombreRepositorio` con tus datos reales

```bash
git remote add origin https://github.com/TU_USUARIO/nombreRepositorio.git
```

### Paso 7: Subir cambios al repositorio remoto
```bash
git push -u origin main
```

---

## 🔄 Flujo de Trabajo para Actualizaciones

### Cuando hagas cambios en el código:

1. **Ver el estado de los archivos**
   ```bash
   git status
   ```

2. **Agregar archivos modificados**
   ```bash
   git add .
   ```
   O agregar archivos específicos:
   ```bash
   git add nombre-archivo.js
   ```

3. **Hacer commit con mensaje descriptivo**
   ```bash
   git commit -m "Descripción clara del cambio realizado"
   ```

4. **Subir cambios al repositorio**
   ```bash
   git push
   ```

---

## 🧪 Antes de Hacer Push - Verificaciones Locales

### Ejecutar pruebas localmente
```bash
npm test
```

### Ejecutar ESLint
```bash
npm run lint
```

### Iniciar el servidor (para pruebas manuales)
```bash
npm start
```

---

## 🔍 Comandos Útiles de Git

### Ver historial de commits
```bash
git log --oneline
```

### Ver diferencias antes de commit
```bash
git diff
```

### Deshacer cambios no confirmados
```bash
git checkout -- nombre-archivo.js
```

### Ver ramas disponibles
```bash
git branch
```

### Crear una nueva rama
```bash
git checkout -b nombre-nueva-rama
```

---

## ⚠️ Para Provocar Error Intencional (Actividad del Lab)

### 1. Modificar sum.js para que falle
Cambiar la función sum para que retorne un resultado incorrecto:
```javascript
export function sum(a, b) {
  return a + b + 1; // Error intencional
}
```

### 2. Hacer commit y push
```bash
git add sum.js
git commit -m "Test: Provocar error intencional en función sum"
git push
```

### 3. Verificar en GitHub Actions
- Ir a la pestaña "Actions" en GitHub
- Observar que el workflow falla ❌
- **TOMAR CAPTURA DE PANTALLA**

### 4. Corregir el error
Restaurar sum.js a su estado correcto:
```javascript
export function sum(a, b) {
  return a + b;
}
```

### 5. Hacer commit de corrección y push
```bash
git add sum.js
git commit -m "Fix: Corregir función sum"
git push
```

### 6. Verificar corrección en GitHub Actions
- Ir nuevamente a "Actions"
- Observar que el workflow pasa ✅
- **TOMAR CAPTURA DE PANTALLA**

---

## 📊 Verificar GitHub Actions

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Actions"**
3. Verás la lista de workflows ejecutados
4. Haz clic en cualquier ejecución para ver los detalles
5. Revisa cada step del job:
   - ✅ Checkout del repositorio
   - ✅ Configurar Node.js
   - ✅ Instalar dependencias
   - ✅ Análisis estático con ESLint
   - ✅ Ejecutar pruebas unitarias
   - ✅ Simulación de despliegue

---

## 🎯 Resumen de Comandos Esenciales

```bash
# Configuración inicial
git init
git add .
git commit -m "Proyecto base con CI"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nombreRepositorio.git
git push -u origin main

# Flujo normal de trabajo
git status
git add .
git commit -m "mensaje descriptivo"
git push

# Verificaciones locales
npm test
npm run lint
npm start
```

---

## ✅ Checklist de Verificación

- [ ] Repositorio creado en GitHub
- [ ] Dependencias instaladas localmente (`npm install`)
- [ ] Pruebas locales ejecutadas exitosamente (`npm test`)
- [ ] ESLint sin errores (`npm run lint`)
- [ ] Primer push realizado
- [ ] Workflow de GitHub Actions ejecutándose
- [ ] Todos los steps del workflow en verde ✅
- [ ] Error intencional probado y documentado
- [ ] Corrección realizada y verificada

---

**Autor**: Denise  
**Laboratorio**: CI/CD usando GitHub Actions  
**Fecha**: Enero 2026
