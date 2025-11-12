# CURSO_BACKEND_NODE
Repositorio para las entregas de proyectos

# API CLI - Pre_Entrega

Pequeña aplicación CLI en Node.js que consume la API de ejemplo https://fakestoreapi.com para listar, obtener, crear, actualizar y eliminar productos.

## Requisitos

- Node.js 18+ (incluye fetch global). Si usas una versión anterior, instala un polyfill como `node-fetch`.
- Conexión a Internet (se llama a https://fakestoreapi.com).

## Archivos principales

- `index.js` - Punto de entrada; parsea los argumentos de línea de comandos y llama a las funciones del servicio.
- `serviceApi.js` - Funciones que consumen la API remota con `fetch`.
- `package.json` - (opcional) metadatos del proyecto.

## Cómo funciona (resumen rápido)

`index.js` lee `process.argv.slice(2)` y espera los argumentos en este orden:

- argumento_0: método HTTP en mayúsculas (`GET`, `POST`, `PUT`, `DELETE`)

- argumento_1: recurso o recurso/id (`products` o `products/1`)

- para `POST`: argumento_2 = title, argumento_3 = price, argumento_4 = category

- para `PUT`: argumento_1 debe ser `products`, argumento_2 debe ser el id (número) y luego title, price, category

- para `DELETE` y `GET` single: pasar `products/id` como segundo argumento

> Nota importante: el código actual usa diferentes rutas internamente en `serviceApi.js` (por ejemplo, `getSingleProduct` y `deleteProduct` hacen fetch a `${urlService}/${id}`), por lo que los comandos que pasan `products/1` funcionan correctamente (se concatenan sobre la URL base).

## Uso y ejemplos (PowerShell - Windows)

Abrir PowerShell en la carpeta del proyecto y ejecutar con `node`.

- Listar todos los productos (GET /products):

```powershell
npm start GET products
```

- Obtener un producto por id (GET /products/:id) — pasar `products/id` como segundo argumento:

```powershell
npm start GET products/{id=estero}
```

- Crear un nuevo producto (POST /products):

```powershell
npm start POST products "title" precio "category"
```

Asegúrate de encerrar en comillas los argumentos de texto en PowerShell.

- Actualizar un producto (PUT /products/:id):

```powershell
npm start PUT products {id} "title_new" 150.9 "category_new"
```

Aquí el id va como tercer argumento (argumentos[2]) y debe ser un número entero. El script valida que argumento 2 contenga solo dígitos antes de convertirlo a número.

- Eliminar un producto (DELETE /products/:id):

```powershell
npm start DELETE products/{id} 
```

## Formato de datos

- `id` (entero positivo)
- `title` (string)
- `price` (número)
- `category` (string)

## Comprobaciones y errores comunes

- Si recibes `Comando erroneo...` revisa el orden y cantidad de argumentos.
- Para `PUT` el script exige que `argumentos[2]` sea un número (solo dígitos). Si no, no ejecutará la actualización.
- En PowerShell recuerda escapar/encerrar cadenas con comillas.
- Si `fetch` falla, revisa la conexión a Internet o el estado de https://fakestoreapi.com

## Ejemplos rápidos

- Obtener Productos:
    npm start GET products

- Obtener Producto id=3:
    npm start GET products/3

- Crear Nuevo Producto:
    npm start POST products microfono 100.9 Electronicos

- Actualizar precio Producto id=21:
    npm start PUT products 21 microfono 150.9 Electronicos

- Eliminar Producto id=21:
    npm start DELETE products/21
