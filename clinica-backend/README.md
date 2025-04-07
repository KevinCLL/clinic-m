# API Backend para Clínica

Backend para la aplicación web de la clínica, desarrollado con Node.js, Express y MongoDB.

## Requisitos

- Node.js (versión 14.x o superior)
- MongoDB (local o en la nube como Railway/MongoDB Atlas)
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd clinica-backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/clinica
JWT_SECRET=tu_clave_secreta_aqui
JWT_EXPIRES_IN=1d
NODE_ENV=development
```
   
   Nota: Para producción, cambia `NODE_ENV` a `production` y asegúrate de usar una `JWT_SECRET` segura.

## Inicialización de la Base de Datos

Para inicializar la base de datos con un administrador y secciones por defecto:

```bash
node src/scripts/seed.js
```

Esto creará:
- Un usuario administrador (usuario: admin, contraseña: admin123)
- Secciones predeterminadas para la web (inicio, servicios, etc.)

## Ejecución

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## Estructura del Proyecto

```
src/
├── config/       # Configuración (base de datos, etc.)
├── controllers/  # Controladores que manejan la lógica
├── middlewares/  # Middleware (autenticación, validación)
├── models/       # Modelos de datos (Mongoose)
├── routes/       # Definición de rutas API
├── scripts/      # Scripts de utilidad
└── app.js        # Punto de entrada de la aplicación
```

## API Endpoints

### Autenticación

| Método | Ruta | Descripción | Acceso |
|--------|------|-------------|--------|
| POST | /api/auth/login | Iniciar sesión | Público |
| GET | /api/auth/profile | Obtener perfil del admin | Privado |
| PUT | /api/auth/change-password | Cambiar contraseña | Privado |
| POST | /api/auth/create-admin | Crear admin inicial | Público* |

*Solo funciona si no hay administradores en la base de datos.

### Información de la Clínica

| Método | Ruta | Descripción | Acceso |
|--------|------|-------------|--------|
| GET | /api/clinic-info | Obtener todas las secciones | Público** |
| GET | /api/clinic-info/:sectionId | Obtener una sección | Público** |
| POST | /api/clinic-info | Crear nueva sección | Privado |
| PUT | /api/clinic-info/:sectionId | Actualizar sección | Privado |
| DELETE | /api/clinic-info/:sectionId | Eliminar sección | Privado |
| POST | /api/clinic-info/initialize | Inicializar secciones por defecto | Privado |

**Las rutas públicas solo muestran secciones publicadas a menos que sea el admin.

## Autenticación

La API utiliza autenticación JWT (JSON Web Token). Para acceder a rutas protegidas:

1. Inicia sesión en `/api/auth/login` para obtener un token
2. Incluye el token en el header de las peticiones:
   ```
   Authorization: Bearer <tu_token_aqui>
   ```

## Despliegue en Railway

1. Crea una cuenta en [Railway](https://railway.app/)
2. Crea un nuevo proyecto
3. Añade un servicio MongoDB
4. Añade un servicio Node.js vinculado a tu repositorio
5. Configura las variables de entorno:
   - `PORT` (Railway lo establece automáticamente)
   - `MONGODB_URI` (Railway proporciona esta URL)
   - `JWT_SECRET` (Genera una clave segura)
   - `JWT_EXPIRES_IN` (p.ej., "1d")
   - `NODE_ENV` = "production"

## Acceso al Administrador

Después de inicializar la base de datos, puedes acceder con:
- **Usuario**: admin
- **Contraseña**: admin123

Se recomienda cambiar la contraseña inmediatamente después del primer inicio de sesión.

## Licencia

[MIT](LICENSE)