# Proyecto Backend Node.js

**Entrega final del Curso Backend Node.js**

Un servidor API REST construido con **Express.js** que proporciona autenticación con JWT y gestión de productos integrado con **Firebase**.

---

## 📋 Descripción General

Este proyecto es una API REST completa que implementa:
- ✅ Autenticación basada en JWT (JSON Web Tokens)
- ✅ Gestión CRUD de productos
- ✅ Gestión de usuarios
- ✅ Integración con Firebase (productos y usuarios)
- ✅ Firebase Collections: productos y usuarios
- ✅ Validación de datos con Joi
- ✅ Manejo de errores centralizado
- ✅ Configuración de CORS
- ✅ Despliegue en Vercel

---

## 🚀 Características Principales

### Autenticación (Auth)
- **Ruta POST `/auth/login`** - Autentica usuarios y genera tokens JWT
- Validación de credenciales
- Generación segura de tokens

### Gestión de Productos
- **GET `/api/products`** - Obtiene todos los productos
- **GET `/api/products/:id`** - Obtiene un producto por ID
- **POST `/api/products/create`** - Crea un nuevo producto
- **PUT `/api/products/:id`** - Actualiza un producto existente
- **DELETE `/api/products/:id`** - Elimina un producto por ID

### Seguridad
- Middleware de autenticación para proteger rutas
- Validación de datos con Joi
- Manejo centralizado de errores
- CORS habilitado

---

## 📦 Dependencias

### Producción
```json
{
  "express": "^5.1.0",           // Framework web
  "firebase": "^12.5.0",         // Base de datos y autenticación
  "jsonwebtoken": "^9.0.2",      // Manejo de JWT
  "joi": "^18.0.1",              // Validación de esquemas
  "cors": "^2.8.5",              // Control de CORS
  "body-parser": "^2.2.0",       // Parseo de request body
  "dotenv": "^17.2.3"            // Variables de entorno
}
```

### Desarrollo
```json
{
  "nodemon": "^2.0.22"           // Reinicio automático en desarrollo
}
```

---

## 🛠️ Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn
- Cuenta en Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Gilbot5/Curso-Back-End-NodeJS.git
cd Curso-Back-End-NodeJS/ENTREGA
```

2. **Instalar dependencias**
```bash
npm i
```

3. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto:
```env
# Firebase
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Config Server:
PRODUCTS_SERVICE_URL=http://localhost
SERVER_INIT=Servidor corriendo en http://localhost
PORT=3000
API=/api
AUTH=/auth

# Config CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://midominio.com
CORS_ALLOWED_METHODS=GET,POST,PUT,DELETE
CORS_ALLOWED_HEADERS=Content-Type,Authorization
CORS_EXPOSED_HEADERS=Content-Length
CORS_ALLOW_CREDENTIALS=true
CORS_MAX_AGE=600
CORS_OPTIONS_SUCCESS_STATUS=204

# Config Rutas:
PRODUCT_ROUTE=/products/create
PRODUCTS_ROUTE=/products
PRODUCT_ID_ROUTE=/products/:id
LOGIN_ROUTE=/login

# Config JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h

# Mensajes:
MSG_PRODUCT_NOT_FOUND=El recurso solicitado no existe
MSG_INVALID_PRODUCT_ID=ID de producto inválido
MSG_PRODUCT_DELETED=Producto eliminado exitosamente
MSG_PRODUCT_CREATED=Producto creado exitosamente
MSG_PRODUCT_UPDATED=Producto actualizado exitosamente
MSG_INTERNAL_SERVER_ERROR=Error interno del servidor
MSG_BAD_REQUEST=Solicitud incorrecta
MSG_UNAUTHORIZED=No autorizado
MSG_FORBIDDEN=Token inválido o expirado
MSG_VALIDATION_ERROR=Error de validación
```

---

## 🎯 Uso

### Desarrollo
```bash
npm run start:dev
```
Inicia el servidor con **nodemon** (reinicio automático)

### Producción
```bash
npm start
```
Inicia el servidor en modo producción

---

## 📁 Estructura del Proyecto

```
ENTREGA/
├── index.js                          # Punto de entrada de la aplicación
├── package.json                      # Dependencias y scripts
├── vercel.json                       # Configuración de Vercel
├── .env                              # Variables de entorno (no incluído en git)
├── .env.EXAMPLE                      # Ejemplo .env (agregar su configuracion Firebase - Collection: usuarios y productos)
└── src/
    ├── configs/
    │   ├── cors.config.js           # Configuración CORS
    │   └── fire-base.config.js      # Inicialización de Firebase
    │
    ├── controllers/
    │   ├── auth.controller.js       # Lógica de autenticación
    │   └── product.controller.js    # Lógica de productos
    │
    ├── middlewares/
    │   ├── authentication.js        # Middleware de JWT
    │   └── error.handler.js         # Manejo centralizado de errores
    │
    ├── models/
    │   ├── user.model.js           # Esquema/modelo de usuario
    │   └── product.model.js        # Esquema/modelo de producto
    │
    ├── routes/
    │   ├── auth.route.js           # Rutas de autenticación
    │   └── product.route.js        # Rutas de productos
    │
    ├── services/
    │   ├── auth.service.js         # Servicios de autenticación
    │   └── product.service.js      # Servicios de productos
    │
    └── utils/
        ├── token.generator.js      # Generación de JWT
        ├── validations.js          # Validaciones con Joi
        └── manejo.error.js         # Funciones de manejo de errores
```

---

## 🔌 Endpoints de la API

### Autenticación

**POST `/auth/login`**
```json
Request:
{
  "id": "1",
  "email": "test@gmail.com",
  "password": "123456"
}

Response:
{
  "id": "1",
  "email": "test@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```
## Productos
#### Nota:
Si usas mi collection de postman, el token se agrega de manera automática a las solicitudes.

**GET `/api/products`**
```
Obtiene la lista de todos los productos
Headers: Authorization: Bearer <token>
```

**GET `/api/products/:id`**
```
Obtiene un producto específico por su ID
Headers: Authorization: Bearer <token>
```

**POST `/api/products/create`**
```json
Request:
{
  "nombre": "Teclado",
  "categoria": "electronica",
  "precio": 99.99
}

Headers: Authorization: Bearer <token>
```

**PUT `/api/products/:id`**
```json
Request:
{
  "nombre": "Teclado",
  "categoria": "electronica",
  "precio": 10099.99
}

Headers: Authorization: Bearer <token>
```

**DELETE `/api/products/:id`**
```
Elimina un producto por su ID
Headers: Authorization: Bearer <token>
```

---

## 🔐 Autenticación

La API utiliza **JWT (JSON Web Tokens)** para autenticación. 

### Flujo:
1. El cliente envía credenciales a `/auth/login`
2. El servidor valida las credenciales con Firebase
3. Se genera un JWT que expira en un tiempo configurado
4. El cliente incluye el token en el header `Authorization: Bearer <token>`
5. El middleware `authentication.js` valida el token en cada petición

---

## ⚠️ Manejo de Errores

El proyecto implementa un manejo centralizado de errores con:
- Validación de esquemas con Joi
- Middleware `error.handler.js` que captura errores
- Respuestas de error consistentes
- Códigos HTTP apropiados

---

## 🌐 CORS

La configuración CORS permite:
- Solicitudes desde orígenes específicos
- Métodos HTTP: GET, POST, PUT, DELETE
- Headers personalizados

Configuración en `src/configs/cors.config.js`

---

## 🚀 Despliegue en Vercel

El proyecto está configurado para desplegar en Vercel. La configuración se encuentra en `vercel.json`:

```json
{
  "builds": [
    { "src": "./index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
```

### Pasos de despliegue:
1. Conectar el repositorio a Vercel
2. Configurar variables de entorno en Vercel Dashboard
3. Vercel desplegará automáticamente en cada push a main

---

## 📚 Tecnologías Utilizadas

| Tecnología | Propósito |
|---|---|
| **Express.js** | Framework web para Node.js |
| **Firebase** | Base de datos y autenticación |
| **JWT** | Autenticación basada en tokens |
| **Joi** | Validación de esquemas |
| **CORS** | Control de origen cruzado |
| **Nodemon** | Desarrollo: reinicio automático |
| **Vercel** | Hosting y despliegue |

---

## 📝 Scripts Disponibles

```bash
npm start          # Inicia el servidor en producción
npm run start:dev  # Inicia el servidor en desarrollo con nodemon
npm run build      # Compila con webpack (si está configurado)
npm test           # Ejecutar pruebas
```

---

## 👤 Autor

**Gilbert Ordaz** - [@Gilbot5](https://github.com/Gilbot5)

---

## 📄 Licencia

ISC - Ver archivo LICENSE para más detalles

---

## 🔗 Enlaces

- **Repositorio**: [https://github.com/Gilbot5/Curso-Back-End-NodeJS](https://github.com/Gilbot5/Curso-Back-End-NodeJS)
- **Issues**: [https://github.com/Gilbot5/Curso-Back-End-NodeJS/issues](https://github.com/Gilbot5/Curso-Back-End-NodeJS/issues)

---

## 💡 Notas Importantes

1. **Variables de Entorno**: Asegúrate de configurar todas las variables en `.env`
2. **Firebase**: Necesitas una cuenta y proyecto configurado en Firebase
3. **JWT Secret**: Cambia la clave secreta en producción
4. **CORS**: Configura los orígenes permitidos según tus necesidades

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Última actualización**: Noviembre 2025
