
# Proyecto Backend Node.js

**Pre-entrega del Curso Backend Node.js**

---

Este repositorio contiene la pre-entrega del Curso Backend Node.js. Se trata de una pequeña aplicación CLI en Node.js que consume la API pública [FakeStoreAPI](https://fakestoreapi.com) para listar, obtener, crear, actualizar y eliminar productos.

## Requisitos:

- **Node.js 18+** (incluye soporte nativo para `fetch`).  
  Si usas una versión anterior, instala un polyfill como `node-fetch`.
- **Conexión a Internet** (la aplicación realiza llamadas a https://fakestoreapi.com).

## Estructura de Archivos

- `index.js`: Punto de entrada. Parseo de argumentos CLI y llamada a funciones del servicio.
- `serviceApi.js`: Funciones que consumen la API remota usando `fetch`.
- `package.json`: Metadatos y scripts del proyecto.
- Otros archivos y carpetas para configuración y organización interna.

## Uso

Abre PowerShell en la carpeta del proyecto y ejecuta los comandos con `npm start`:

### Comandos disponibles

1. **Listar todos los productos**
   ```
   npm start GET products
   ```

2. **Obtener un producto por ID**
   ```
   npm start GET products/{id}
   ```

3. **Crear un nuevo producto**
   ```
   npm start POST products "title" price "category"
   ```
   Ejemplo:
   ```
   npm start POST products "microfono" 100.9 "Electronicos"
   ```

4. **Actualizar un producto**
   ```
   npm start PUT products {id} "title_new" price "category_new"
   ```
   Ejemplo:
   ```
   npm start PUT products 21 "microfono" 150.9 "Electronicos"
   ```

5. **Eliminar un producto**
   ```
   npm start DELETE products/{id}
   ```
   Ejemplo:
   ```
   npm start DELETE products/21
   ```

### Notas importantes

- Para **PUT**, el ID debe ser un número entero (argumento 2).
- En PowerShell, encierra los argumentos de texto entre comillas.
- Si recibes el mensaje "Comando erroneo...", revisa el orden y cantidad de argumentos.
- Si `fetch` falla, verifica tu conexión a Internet o el estado de la API.

## Formato de datos

- `id`: entero positivo
- `title`: string
- `price`: número
- `category`: string

## Ejemplos rápidos

- Listar productos:  
  `npm start GET products`
- Obtener producto ID=3:  
  `npm start GET products/3`
- Crear producto:  
  `npm start POST products "microfono" 100.9 "Electronicos"`
- Actualizar producto ID=21:  
  `npm start PUT products 21 "microfono" 150.9 "Electronicos"`
- Eliminar producto ID=21:  
  `npm start DELETE products/21`

---
